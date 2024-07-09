/**
 * Extracts a section of an array, similar to Python's built-in slicing syntax.
 *
 * @param {T[]} array - The array to extract elements from.
 * @param {number} [start=0] - The starting index of the slice (inclusive). Defaults to 0.
 * @param {number} [end=array.length] - The ending index of the slice (exclusive). Defaults to the array length.
 *
 * @returns {T[]} A new array containing the extracted elements from the original array.
 *
 * @throws {RangeError} If 'start' or 'end' are negative or greater than the array length.
 */
const slice = <T>(
  array: T[],
  start: number = 0,
  end: number = array.length
): T[] => {
  // Input validation for better robustness
  if (start < 0 || start >= array.length) {
    throw new RangeError(
      "Start index cannot be negative or greater than array length."
    );
  }
  if (end < 0 || end > array.length) {
    throw new RangeError(
      "End index cannot be negative or greater than array length."
    );
  }

  // Corrected logic using slice method (more concise and efficient)
  return array.slice(start, end);
};

export default slice;
