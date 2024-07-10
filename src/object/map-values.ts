/**
 * Maps the values of an object to new values.
 * @param obj - The object to map values of.
 * @param mapFn - The function to map values.
 * @returns The object with mapped values.
 */
const mapValues = <T extends object>(
  obj: T,
  mapFn: (value: T[keyof T]) => any
): { [K in keyof T]: any } => {
  const result = {} as { [K in keyof T]: any };
  Object.keys(obj).forEach((key) => {
    result[key as keyof T] = mapFn(obj[key as keyof T]);
  });
  return result;
};

export default mapValues;
