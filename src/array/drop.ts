/**
 * Removes the specified number of elements from the beginning of an array and returns a new array containing the remaining elements.
 *
 * @param {T[]} array - The array to remove elements from.
 * @param {number} [n=1] (optional) - The number of elements to drop. Defaults to 1. If 'n' is negative, it will be set to 0.
 *
 * @returns {T[]} A new array containing the elements remaining after dropping the specified number of elements from the beginning.
 */
const drop = <T>(array: T[], n: number = 1): T[] => {
  // Ensure n is not negative
  n = Math.max(0, n);

  // Use slice for efficient extraction of remaining elements
  return array.slice(n);
};

export default drop;
