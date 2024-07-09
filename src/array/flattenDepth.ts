/**
 * Flattens nested arrays up to a specified depth into a single array.
 *
 * @param {any[]} array - The array to flatten.
 * @param {number} depth (optional) - The maximum depth of nesting to flatten. Defaults to 1.
 *
 * @returns {any[]} A new array containing elements from the original array up to the specified depth.
 */
const flattenDepth = (array: any[], depth: number = 1): any[] => {
  const flattenHelper = (innerArray: any[], currentDepth: number): any[] => {
    if (currentDepth === 0) {
      return innerArray;
    }
    const output: any[] = [];
    for (const item of innerArray) {
      if (Array.isArray(item) && currentDepth > 0) {
        output.push(...flattenHelper(item, currentDepth - 1));
      } else {
        output.push(item);
      }
    }
    return output;
  };

  return flattenHelper(array, depth);
};

export default flattenDepth;
