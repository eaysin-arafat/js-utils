/**
 * Gets the last element of an array.
 *
 * @param array - The array to get the last element from.
 *
 * @returns The last element of the array, or undefined if the array is empty.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const getLastElement = (array: any[]): any | undefined => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  // Handle empty array case (return undefined instead of error)
  if (array.length === 0) {
    return undefined;
  }

  return array[array.length - 1];
};

export default getLastElement;
