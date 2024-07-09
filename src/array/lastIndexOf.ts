/**
 * Finds the last index of a value within an array, searching backward from a specified index.
 * This function mimics the behavior of the native `lastIndexOf` method.
 *
 * @param array - The array to search in.
 * @param value - The value to search for.
 * @param fromIndex - The index at which to begin the search. Defaults to 0.
 *
 * @returns The index of the last matching element, or -1 if not found.
 *
 * @throws {TypeError} If the first argument is not an array.
 */
const lastIndexOf = (
  array: any[],
  value: any,
  fromIndex: number = 0
): number => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }

  for (let i = fromIndex; i >= 0; i--) {
    if (value === array[i]) {
      return i;
    }
  }

  return -1;
};

export default lastIndexOf;
