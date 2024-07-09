/**
 * Extracts a section of an array, similar to Python's built-in slicing syntax.
 * This function creates a new array containing up to 'n' elements from the beginning of the input array.
 *
 * @param {any[]} array - The array to extract elements from.
 * @param {number} [n=1] (optional) The number of elements to extract. Defaults to 1.
 *
 * @returns {any[]} A new array containing up to 'n' elements from the beginning of the input array.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const take = (array: any[], n: number = 1): any[] => {
  // Type check to ensure the argument is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  // Ensure n is not negative
  if (n < 0) {
    n = 0;
  }

  // Limit n to the length of the array to avoid IndexError
  n = Math.min(n, array.length);

  // Use slice for efficient extraction (consider using spread syntax for modern environments)
  return array.slice(0, n);
};

export default take;
