/**
 * Omits specified properties from an object.
 * @param obj - The object to omit properties from.
 * @param keys - The keys of the properties to omit.
 * @returns An object without the omitted properties.
 */
const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = {} as Omit<T, K>;
  Object.keys(obj).forEach((key) => {
    if (!keys.includes(key as K)) {
      result[key as Exclude<keyof T, K>] = obj[key as Exclude<keyof T, K>];
    }
  });
  return result;
};

export default omit;
