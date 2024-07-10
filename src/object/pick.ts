/**
 * Picks specified properties from an object.
 * @param obj - The object to pick properties from.
 * @param keys - The keys of the properties to pick.
 * @returns An object with the picked properties.
 */
const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

export default pick;
