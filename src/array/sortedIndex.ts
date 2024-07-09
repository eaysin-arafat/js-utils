/**
 * Finds the insertion index for a value in a sorted array.
 *
 * @param {number[]} array - The sorted array to search in (ascending order assumed).
 * @param {number} value - The value to search for.
 *
 * @returns {number} The index where the 'value' should be inserted to maintain sorted order, or the array length if 'value' belongs at the end.
 *
 * @throws {TypeError} If the array is not an array of numbers.
 */
const sortedIndex = (array: number[], value: number): number => {
  // Type check to ensure the array is a number array for binary search
  if (
    !Array.isArray(array) ||
    !array.every((element) => typeof element === "number")
  ) {
    throw new TypeError("The array must be a sorted array of numbers.");
  }

  // Use binary search for efficient finding of insertion index
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

export default sortedIndex;
