import setNestedValue from "./set-nested-value";

/**
 * Unflattens a single-level object into a nested object.
 * @param obj - The object to unflatten.
 * @returns The nested object.
 */
const unFlattenObject = (obj: any): any => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    setNestedValue(result, key, obj[key]);
  });
  return result;
};

export default unFlattenObject;
