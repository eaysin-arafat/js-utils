/**
 * Filters the keys of an object based on a predicate function.
 * @param obj - The object to filter keys of.
 * @param predicate - The predicate function to filter keys.
 * @returns The object with filtered keys.
 */
const filterKeys = <T extends object>(
  obj: T,
  predicate: (key: keyof T) => boolean
): Partial<T> => {
  const result = {} as Partial<T>;
  Object.keys(obj).forEach((key) => {
    if (predicate(key as keyof T)) {
      result[key as keyof T] = obj[key as keyof T];
    }
  });
  return result;
};

export default filterKeys;
