/**
 * Merges multiple objects into one.
 * @param objects - The objects to merge.
 * @returns The merged object.
 */
const mergeObjects = <T extends object>(...objects: T[]): T => {
  return Object.assign({}, ...objects);
};

export default mergeObjects;
