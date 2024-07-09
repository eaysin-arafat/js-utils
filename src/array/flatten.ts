/**
 * Flattens nested arrays up to any depth into a single array.
 *
 * @param {any[]} array - The array to flatten.
 *
 * @returns {any[]} A new array containing elements from the original array and all its nested sub-arrays.
 */
const flatten = (array: any[]): any[] => {
  const output: any[] = [];

  const flattenHelper = (innerArray: any[]) => {
    for (const item of innerArray) {
      if (Array.isArray(item)) {
        flattenHelper(item); // Recursive call for nested arrays
      } else {
        output.push(item);
      }
    }
  };

  flattenHelper(array);
  return output;
};

export default flatten;
