/**
 * Check if a value is an object (excluding arrays and null).
 * @param obj - The value to check.
 * @returns True if the value is an object, false otherwise.
 */
const isObject = (obj: any): obj is object =>
  obj !== null && typeof obj === "object" && !Array.isArray(obj);

export default isObject;
