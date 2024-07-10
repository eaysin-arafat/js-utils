/**
 * Inverts the keys and values of an object.
 * @param obj - The object to invert.
 * @returns The inverted object.
 */
const invertObject = <T extends object>(obj: T): { [K in keyof T]: K } => {
  const result = {} as { [K in keyof T]: K };
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    result[value as keyof T] = key as any;
  });
  return result;
};

export default invertObject;
