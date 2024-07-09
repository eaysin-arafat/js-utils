/**
 * Extracts a section of an array, similar to Python's built-in slicing syntax.
 * This function creates a new array containing all elements of the input array except the first one.
 *
 * @param {any[]} array - The array to extract elements from.
 *
 * @returns {any[]} A new array containing all elements from the input array except the first one.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const tail = (array: any[]): any[] => {
  // Type check to ensure the argument is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  // Create a new array to avoid modifying the original
  const result = array.slice(1);

  return result;
};

export default tail;
