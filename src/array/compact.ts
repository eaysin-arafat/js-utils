/**
 * Removes falsy values from an array, keeping only truthy values.
 *
 * @param {T[]} arr - The array to remove falsy values from.
 *
 * @returns {T[]} A new array containing only truthy values from the original array.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const compact = <T>(arr: T[]): T[] => {
  // Ensure the argument is an array
  if (!Array.isArray(arr)) {
    throw new TypeError("The argument must be an array.");
  }

  // Use filter to efficiently remove falsy values
  return arr.filter(Boolean);
};

export default compact;
