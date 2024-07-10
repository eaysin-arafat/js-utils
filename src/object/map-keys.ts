/**
 * Maps the keys of an object to new keys.
 * @param obj - The object to map keys of.
 * @param mapFn - The function to map keys.
 * @returns The object with mapped keys.
 */
const mapKeys = <T extends object>(
  obj: T,
  mapFn: (key: keyof T) => string
): { [key: string]: any } => {
  const result = {} as { [key: string]: any };
  Object.keys(obj).forEach((key) => {
    result[mapFn(key as keyof T)] = obj[key as keyof T];
  });
  return result;
};

export default mapKeys;
