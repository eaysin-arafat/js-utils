/**
 * Finds the index of the first occurrence of a value in an array.
 * This function mimics the behavior of the native `indexOf` method.
 *
 * @param {any[]} array - The array to search in.
 * @param {*} value - The value to search for.
 * @param {number} fromIndex (optional) - The index at which to begin the search. Defaults to 0.
 *
 * @returns {number} The index of the first matching element, or -1 if not found.
 *
 * @throws {TypeError} If the first argument is not an array.
 */
const indexOf = (array: any[], value: any, fromIndex: number = 0): number => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }

  // Handle negative or out-of-bounds fromIndex
  if (fromIndex < 0) {
    fromIndex = 0;
  } else if (fromIndex > array.length) {
    fromIndex = array.length;
  }

  for (let i = fromIndex; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

export default indexOf;
