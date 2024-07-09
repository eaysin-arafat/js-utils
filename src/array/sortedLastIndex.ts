/**
 * Finds the last index of a value in a sorted array (ascending order assumed).
 *
 * @param {number[]} array - The sorted array to search in (ascending order assumed).
 * @param {number} value - The value to search for.
 *
 * @returns {number} The last index where the 'value' is found in the array, or -1 if not found.
 *
 * @throws {TypeError} If the array is not an array of numbers.
 */
const sortedLastIndex = (array: number[], value: number): number => {
  // Type check to ensure the array is a number array for binary search
  if (
    !Array.isArray(array) ||
    !array.every((element) => typeof element === "number")
  ) {
    throw new TypeError("The array must be a sorted array of numbers.");
  }

  // Use modified binary search for finding the last occurrence
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] > value) {
      high = mid - 1;
    } else if (array[mid] < value) {
      // If the value is found, search only the right side for duplicates
      low = mid + 1;
    } else {
      // If the value is found at 'mid', keep searching right side for duplicates
      low = mid + 1;
    }
  }

  // Return the last found index (if any) or -1 if not found
  return low > 0 && array[low - 1] === value ? low - 1 : -1;
};

export default sortedLastIndex;
