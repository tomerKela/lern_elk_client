import { ZodError } from "zod";

export const formatZodError = (zodError: ZodError): Object => {
  console.log(zodError);
  const formattedError: Record<string, any> = {};
  zodError.issues.forEach((issue) => {
    const path = issue.path.join(".");
    (issue.path as any) = path;
    formattedError[path] = issue;
  });
  return formattedError;
};
