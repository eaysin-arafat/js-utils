/**
 * Creates a deep copy of an object.
 * @param obj - The object to clone.
 * @returns The deep cloned object.
 */
const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

export default deepClone;
