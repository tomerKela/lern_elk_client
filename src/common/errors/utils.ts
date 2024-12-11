import { FetchError } from "./types";

export const formatErrorMessages = (groupedErrors: {
  [key: string]: string[];
}) => {
  return Object.entries(groupedErrors)
    .map(([type, messages]) => `Type: ${type}\n- ${messages.join("\n- ")}`)
    .join("\n\n");
};

export const groupErrorsByType = (errors: FetchError[]) => {
  return errors.reduce((acc: { [key: string]: string[] }, error) => {
    if (!acc[error.httpCode]) acc[error.httpCode] = [];
    acc[error.httpCode].push(error.message);
    return acc;
  }, {});
};
