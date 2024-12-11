import { errorHandlers } from "./errorsHandlersDictionary";
import { useErrorStore } from "./errorStorage";
import { FetchError } from "./types";

export function errorHandler(error: FetchError) {
  const { addError } = useErrorStore.getState();

  const errorEntry = errorHandlers[error.message];

  if (errorEntry) {
    const { message, handler } = errorEntry;

    if (handler) {
      handler(error);
    }

    addError({
      message,
      httpCode: error.httpCode,
      data: error.data,
    });
  } else {
    addError({
      message: "An unexpected error occurred.",
      httpCode: error.httpCode,
      data: error.data,
    });
  }
}
