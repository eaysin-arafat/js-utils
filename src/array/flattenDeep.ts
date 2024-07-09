/**
 * Flattens nested arrays up to any depth into a single array.
 *
 * @param {any[]} array - The array to flatten.
 *
 * @returns {any[]} A new array containing elements from the original array and all its nested sub-arrays.
 */
const flattenDeep = (array: any[]): any[] => {
  /**
   * Recursive helper function to flatten an array.
   *
   * @param {any[]} innerArray - The array to be flattened (could be the main array or a nested array).
   *
   * @returns {any[]} A new array containing the flattened elements of the input array.
   */
  const flattenHelper = (innerArray: any[]): any[] => {
    return innerArray.reduce((acc: any[], curr: any) => {
      // If the current element is an array, recursively call flattenHelper to handle nested arrays
      if (Array.isArray(curr)) {
        return acc.concat(flattenHelper(curr));
      } else {
        // If the current element is not an array (primitive value), add it to the accumulator
        return acc.concat(curr);
      }
    }, []);
  };

  // Call the helper function with the original array to initiate flattening
  return flattenHelper(array);
};

export default flattenDeep;
