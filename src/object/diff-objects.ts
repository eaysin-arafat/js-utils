import deepEqual from "./deep-equal";

/**
 * Finds the differences between two objects.
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 * @returns An object representing the differences.
 */
const diffObjects = (obj1: any, obj2: any): { [key: string]: any } => {
  const result: { [key: string]: any } = {};

  if (obj1 === obj2) return result;
  if (!obj1 || !obj2 || typeof obj1 !== "object" || typeof obj2 !== "object")
    return obj2;

  Object.keys(obj1).forEach((key) => {
    if (!obj2.hasOwnProperty(key)) {
      result[key] = undefined;
    } else if (!deepEqual(obj1[key], obj2[key])) {
      result[key] = obj2[key];
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!obj1.hasOwnProperty(key)) {
      result[key] = obj2[key];
    }
  });

  return result;
};

export default diffObjects;
