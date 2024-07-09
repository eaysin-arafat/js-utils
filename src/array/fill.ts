/**
 * Fills a specified section of an array with a value and returns a new array.
 *
 * @param {T[]} array - The array to fill.
 * @param {T} value - The value to fill with.
 * @param {number} [start=0] (optional) - The starting index (inclusive) of the section to fill. Defaults to 0.
 * @param {number} [end=array.length] (optional) - The ending index (exclusive) of the section to fill. Defaults to the array length.
 *
 * @returns {T[]} A new array containing the original array with the specified section filled with the value.
 *
 * @throws {TypeError} If the 'array' argument is not an array.
 */
const fill = <T>(
  array: T[],
  value: T,
  start: number = 0,
  end: number = array.length
): T[] => {
  // Type check to ensure the argument is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The 'array' argument must be an array.");
  }

  // Handle potential negative or out-of-bounds indices
  start = Math.max(0, start); // Ensure start is not negative
  end = Math.min(end, array.length); // Ensure end is within array bounds

  // Create a copy of the array to avoid modifying the original
  const copy = array.slice();

  // Fill the specified section of the copy
  for (let i = start; i < end; i++) {
    copy[i] = value;
  }

  return copy;
};

export default fill;
