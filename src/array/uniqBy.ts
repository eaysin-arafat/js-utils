/**
 * Removes duplicate elements from an array, considering a custom comparison function or property for uniqueness.
 *
 * @param {any[]} array - The array to remove duplicates from.
 * @param {(item: any) => any} [iteratee] (optional) A function that receives an element and returns the value to use for comparison. Defaults to the element itself if not a function.
 *
 * @returns {any[]} A new array containing only the unique elements from the original array based on the comparison function or property.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const uniqBy = (array: any[], iteratee?: (item: any) => any): any[] => {
  // Check if the input is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  const isFunction = typeof iteratee === "function";
  const output: any[] = [];
  const iterateeSet = new Set();

  // Iterate through the array
  for (const value of array) {
    // Define the key for comparison based on iteratee or element itself
    const iterateValue = isFunction ? iteratee(value) : value;

    // Check if the key has already been seen
    if (!iterateeSet.has(iterateValue)) {
      // Add the key to the set and include the element in the result
      iterateeSet.add(iterateValue);
      output.push(value);
    }
  }

  return output;
};

export default uniqBy;
