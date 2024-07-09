/**
 * Finds the union of all elements from multiple arrays, removing duplicates.
 *
 * @param {...any[]} arrays - An arbitrary number of arrays to find the union of.
 *
 * @returns {any[]} A new array containing the unique elements from all input arrays.
 *
 * @throws {TypeError} If any argument is not an array.
 */
const union = (...arrays: any[][]): any[] => {
  // Check if all arguments are arrays
  if (!arrays.every(Array.isArray)) {
    throw new TypeError("All arguments must be arrays.");
  }

  const seen = new Set<any>();

  for (const array of arrays) {
    for (const element of array) {
      seen.add(element);
    }
  }

  return [...seen];
};

export default union;
