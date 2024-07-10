/**
 * Gets a nested value from an object using a path.
 * @param obj - The object to get the nested value from.
 * @param path - The path of the nested value.
 * @returns The nested value.
 */
const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((o, p) => (o ? o[p] : undefined), obj);
};

export default getNestedValue;
