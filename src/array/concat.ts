/**
 * Merges elements from an array and any nested iterables (like arrays) into a new array.
 *
 * @param {T[]} array - The starting array to concatenate elements to.
 * @param {...any[]} values - An arbitrary number of additional values, which can also be iterables (like arrays).
 *
 * @returns {T[]} A new array containing elements from the input array and any nested iterables.
 */
const concat = <T>(array: T[], ...values: any[]): T[] => {
  // Use spread syntax for efficient concatenation and handling nested iterables
  return [...array, ...values.flat(Infinity)];
};

export default concat;
