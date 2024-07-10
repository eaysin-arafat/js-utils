/**
 * Transforms the keys of an object using a function.
 * @param obj - The object to transform keys of.
 * @param transformFn - The function to transform keys.
 * @returns The object with transformed keys.
 */
const transformKeys = <T extends object>(
  obj: T,
  transformFn: (key: keyof T) => string
): { [key: string]: any } => {
  const result = {} as { [key: string]: any };
  Object.keys(obj).forEach((key) => {
    result[transformFn(key as keyof T)] = obj[key as keyof T];
  });
  return result;
};

export default transformKeys;
