import { pathMap } from "events-tomeroko3";
import { z } from "zod";
import { FetchError } from "../../errors/types";
import { formatZodError } from "../../utils/formatZodError";
import { apiClient } from "./apiClient";
import { apiStoreHookFactory } from "./useApiStore";

type Endpoints = typeof pathMap;

type EndpointName = keyof Endpoints;

type RequestBodyType<T extends EndpointName> = z.infer<
  Endpoints[T]["requestValidation"]
> extends { body: infer B }
  ? B
  : undefined;

type ResponseBodyType<T extends EndpointName> =
  | z.infer<Endpoints[T]["responseValidation"]>
  | undefined;

type FetchHook<T extends EndpointName> = (
  payload: RequestBodyType<T>
) => Promise<{ result: ResponseBodyType<T> | null; error: any }>;

export const fetchHookFactory = <T extends EndpointName>(endpointName: T) => {
  const useCustomFetch = () => {
    const apiStore = apiStoreHookFactory()();
    const { setLoading, loading } = apiStore;
    const fetch: FetchHook<T> = async (payload) => {
      setLoading(true);
      try {
        const result = await reallyFetchIfThereNoCache<T>(
          endpointName,
          payload,
          apiStore
        );
        setLoading(false);
        return {
          result,
          error: null,
        };
      } catch (error: any) {
        if (isZodError(error)) {
          const fetchError: FetchError = {
            httpCode: 450, //todo: think of a better way to handle this
            message: "REQUEST_VALIDATION_ERROR",
            data: formatZodError(error),
          };
          return { result: null, error: fetchError };
        } else {
          const { status } = error.response;
          const { code, data } = error.response.data.error;
          debugger;
          const fetchError: FetchError = {
            httpCode: status,
            message: code,
            data: data,
          };
          return { result: null, error: fetchError };
        }
      }
    };

    return { fetch, loading };
  };

  return useCustomFetch;
};
const isZodError = (error: any) => error.issues !== undefined;

const reallyFetchIfThereNoCache = async <T extends EndpointName>(
  endpointName: T,
  payload: any,
  { setCache, getCache }: any
) => {
  const endpointConfig = pathMap[endpointName];

  endpointConfig.requestValidation.parse({ body: payload });

  //calculate cache key
  const cacheKey = hashCacheKey(endpointName, payload);

  //fetch from cache or from server.
  const result = getCache(cacheKey)
    ? getCache(cacheKey)
    : await reallyFetchValidateAndSave(endpointName, payload, setCache);

  return result;
};

const hashCacheKey = (endpointName: string, payload: any) => {
  const cacheKey = `${endpointName}_${JSON.stringify(payload)}`;
  return cacheKey;
};

const reallyFetchValidateAndSave = async <T extends EndpointName>(
  endpointName: T,
  payload: any,
  setCache: any
) => {
  const endpoint = pathMap[endpointName];
  const response = await apiClient[endpoint.method as "post"](
    `${endpoint.service}${endpoint.path}`,
    payload
  );
  const validatedResponse = endpoint.responseValidation.parse(response.data);
  const cacheKey = hashCacheKey(endpointName, payload);
  setCache(cacheKey, validatedResponse);
  return validatedResponse;
};
