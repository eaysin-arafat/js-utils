/**
 * Finds the insertion index for a value in a sorted array, using a custom comparison function or property.
 *
 * @param {any[]} array - The sorted array to search in (ascending order assumed).
 * @param {any} value - The value to search for.
 * @param {(item: any) => any} [iteratee] (optional) A function that receives an element and returns the value to use for comparison. Defaults to the entire element if not provided.
 *
 * @returns {number} The index where the 'value' should be inserted to maintain sorted order, or the array length if 'value' belongs at the end.
 *
 * @throws {TypeError} If the array is not an array or the iteratee is not a function (when provided).
 */
const sortedIndexBy = (
  array: any[],
  value: any,
  iteratee?: (item: any) => any
): number => {
  // Type check to ensure the array is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument 'array' must be an array.");
  }

  // Type check for iteratee if provided
  if (iteratee && typeof iteratee !== "function") {
    throw new TypeError(
      "The third argument 'iteratee' must be a function (when provided)."
    );
  }

  // Use binary search for efficient finding of insertion index
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const compareValue = iteratee ? iteratee(value) : value;
    const compareArrayValue = iteratee ? iteratee(array[mid]) : array[mid];

    if (compareArrayValue < compareValue) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

export default sortedIndexBy;
