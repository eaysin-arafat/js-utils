/**
 * Flattens a nested object into a single-level object.
 * @param obj - The object to flatten.
 * @param prefix - The prefix for nested keys.
 * @returns The flattened object.
 */
const flattenObject = (obj: any, prefix = ""): { [key: string]: any } => {
  const result: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else {
      result[newKey] = obj[key];
    }
  });

  return result;
};

export default flattenObject;
