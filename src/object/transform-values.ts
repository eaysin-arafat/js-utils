/**
 * Transforms the values of an object using a function.
 * @param obj - The object to transform values of.
 * @param transformFn - The function to transform values.
 * @returns The object with transformed values.
 */
const transformValues = <T extends object>(
  obj: T,
  transformFn: (value: T[keyof T]) => any
): { [K in keyof T]: any } => {
  const result = {} as { [K in keyof T]: any };
  Object.keys(obj).forEach((key) => {
    result[key as keyof T] = transformFn(obj[key as keyof T]);
  });
  return result;
};

export default transformValues;
