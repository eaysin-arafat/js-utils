/**
 * Retrieves an element from an array based on its position (index).
 *
 * @param array - The array to access elements from.
 * @param n - The index of the element to retrieve. Defaults to 0 (first element).
 *
 * @returns The element at the specified index, or undefined if not found.
 *
 * @throws {TypeError} If the first argument is not an array.
 * @throws {RangeError} If the index (n) is out of bounds.
 */
const nth = (array: any[], n: number = 0): any => {
  if (!Array.isArray(array)) {
    throw new TypeError("The first argument must be an array.");
  }

  if (n >= 0) {
    if (n >= array.length) {
      throw new RangeError("Index out of bounds.");
    }
    return array[n];
  } else {
    const index = n + array.length;
    if (index < 0) {
      throw new RangeError("Negative index out of bounds.");
    }
    return array[index];
  }
};

export default nth;
