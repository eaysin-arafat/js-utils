/**
 * Removes duplicate elements from a sorted array and returns a new array containing unique elements.
 *
 * @param {number[]} array - The sorted array to remove duplicates from (ascending order assumed).
 *
 * @returns {number[]} A new array containing only the unique elements from the original array.
 */
const sortedUniq = (array: number[]): number[] => {
  // Use Set to efficiently store and retrieve unique values
  return [...new Set(array)];
};

export default sortedUniq;
