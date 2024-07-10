/**
 * Deeply maps the keys of an object to new keys.
 * @param obj - The object to map keys of.
 * @param mapFn - The function to map keys.
 * @returns The object with deeply mapped keys.
 */

const deepMapKeys = <T extends Record<string, any>>(
  obj: T,
  mapFn: (key: string) => string
): any => {
  const result: any = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const newKey = mapFn(key);
      const value = obj[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        result[newKey] = deepMapKeys(value, mapFn);
      } else {
        result[newKey] = value;
      }
    }
  }

  return result as { [K in keyof T]: any };
};

export default deepMapKeys;
