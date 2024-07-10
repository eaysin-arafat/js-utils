/**
 * Sets a nested value in an object using a path.
 * @param obj - The object to set the nested value in.
 * @param path - The path of the nested value.
 * @param value - The value to set.
 */
const setNestedValue = (obj: any, path: string, value: any): void => {
  const keys = path.split(".");
  let current = obj;

  while (keys.length > 1) {
    const key = keys.shift();
    if (key === undefined) {
      throw new Error(`Invalid path: ${path}`);
    }
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key]; // No need for type assertion here
  }

  const finalKey = keys[0];
  if (finalKey === undefined) {
    throw new Error(`Invalid path: ${path}`);
  }
  current[finalKey] = value;
};

export default setNestedValue;
