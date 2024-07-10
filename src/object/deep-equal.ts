/**
 * Deeply compares two objects for equality.
 * @param obj1 - The first object to compare.
 * @param obj2 - The second object to compare.
 * @returns True if the objects are deeply equal, otherwise false.
 */
const deepEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;
  if (obj1 && typeof obj1 === "object" && obj2 && typeof obj2 === "object") {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
    for (const key in obj1) {
      if (!obj2.hasOwnProperty(key)) return false;
      if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
  return false;
};

export default deepEqual;
