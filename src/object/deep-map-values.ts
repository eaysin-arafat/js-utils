/**
 * Deeply maps the values of an object to new values.
 * @param obj - The object to map values of.
 * @param mapFn - The function to map values.
 * @returns The object with deeply mapped values.
 */
const deepMapValues = <T extends object, U>(
  obj: T,
  mapFn: (value: T[keyof T]) => U
): { [K in keyof T]: U } => {
  const result = {} as { [K in keyof T]: U };

  Object.keys(obj).forEach((key) => {
    const typedKey = key as keyof T;
    if (typeof obj[typedKey] === "object" && obj[typedKey] !== null) {
      result[typedKey] = deepMapValues(obj[typedKey] as any, mapFn) as any;
    } else {
      result[typedKey] = mapFn(obj[typedKey]);
    }
  });

  return result;
};

export default deepMapValues;
