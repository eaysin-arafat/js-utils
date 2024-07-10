import isObject from "./is-object";

/**
 * Deeply merges multiple objects into one.
 * @param objects - The objects to deep merge.
 * @returns The deeply merged object.
 */
const deepMerge = <T extends object>(...objects: T[]): T => {
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key as keyof T];
      const oVal = obj[key as keyof T];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key as keyof T] = [...pVal, ...oVal] as any;
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key as keyof T] = deepMerge(pVal as any, oVal as any) as any;
      } else {
        prev[key as keyof T] = oVal;
      }
    });
    return prev;
  }, {} as T);
};

export default deepMerge;
