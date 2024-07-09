/**
 * Removes duplicate elements from an array and returns a new array containing only unique elements.
 *
 * @param {any[]} array - The array to remove duplicates from.
 *
 * @returns {any[]} A new array containing only the unique elements from the original array.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const uniq = (array: any[]): any[] => {
  // Ensure the input is an array (implicit type coercion might lead to unexpected behavior)
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  // Use Set to efficiently store unique values and convert back to an array for output
  return [...new Set(array)];
};

export default uniq;
