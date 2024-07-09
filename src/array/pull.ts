/**
 * Removes elements from an iterable that are present in all subsequent iterables.
 *
 * @param arrays - One or more arrays to find the difference of.
 *
 * @returns A new array containing elements present in the first iterable but not in any subsequent iterables.
 *
 * @throws {TypeError} If any argument is not an array or iterable.
 */
const pull = (...arrays: any[][]): Set<any> => {
  // Check if all arguments are arrays or iterables
  for (const arr of arrays) {
    if (!Array.isArray(arr) && !(typeof arr[Symbol.iterator] === "function")) {
      throw new TypeError("All arguments must be arrays or iterables.");
    }
  }

  // Convert the first argument to a Set for efficient membership checks
  const allElements = new Set(arrays[0]);

  // Use reduce to efficiently iterate through subsequent arguments and update the Set
  return arrays.slice(1).reduce((remaining, currentArray) => {
    // Use filter to efficiently remove elements from the Set that are present in the current array
    return new Set(
      [...remaining].filter((element) => !currentArray.includes(element))
    );
  }, allElements);
};

export default pull;
