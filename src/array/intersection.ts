/**
 * Finds the intersection of multiple arrays.
 *
 * @param {...any[]} arrays - Variable number of arrays to find the intersection of.
 *
 * @returns {any[]} A new array containing the elements present in all input arrays.
 *
 * @throws {TypeError} If any argument is not an array.
 */
const intersection = (...arrays: any[][]): any[] => {
  // Check if all arguments are arrays
  for (const arr of arrays) {
    if (!Array.isArray(arr)) {
      throw new TypeError("All arguments must be arrays.");
    }
  }

  // Convert the first array to a Set
  const set = new Set(arrays[0]);

  // Use reduce to efficiently intersect subsequent arrays with the Set
  return arrays.slice(1).reduce((intersectionArray, currentArray) => {
    return intersectionArray.filter((element) =>
      currentArray.includes(element)
    );
  }, Array.from(set));
};

export default intersection;
