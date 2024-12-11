import { pathMap } from "events-tomeroko3";
import { create } from "zustand";
import z from "zod";

type Endpoints = typeof pathMap;
type EndpointName = keyof Endpoints;
type EndpointResponse<T extends EndpointName> = z.infer<
  Endpoints[T]["responseValidation"]
>;

interface CacheEntry<T extends EndpointName> {
  data: EndpointResponse<T>;
  timestamp: number;
}

interface ApiState<T extends EndpointName> {
  loading: boolean;
  cache: Record<string, CacheEntry<any>>;
  setLoading: (loading: boolean) => void;
  setCache: (key: string, data: EndpointResponse<T>) => void;
  getCache: (key: string) => EndpointResponse<T> | undefined;
}

export const apiStoreHookFactory = <T extends EndpointName>() => {
  const useApiStore = create<ApiState<T>>((set, get) => ({
    // create from "zustand"; returns an hook function
    loading: false,
    cache: {},
    setLoading: (loading) => set({ loading }),
    setCache: (key, data) =>
      set((state) => ({
        cache: {
          ...state.cache,
          [key]: { data, timestamp: Date.now() },
        },
      })),
    getCache: (key) => {
      const cacheEntry = get().cache[key];
      if (cacheEntry && Date.now() - cacheEntry.timestamp < 60000) {
        return cacheEntry.data;
      }
    },
  }));
  return useApiStore;
};

export const hallow = 5;
