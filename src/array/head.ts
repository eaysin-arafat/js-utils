/**
 * Retrieves the first element of an array.
 *
 * @param {any[]} array - The array from which to retrieve the first element.
 *
 * @returns {any | number} The first element of the array, or -1 if the array is empty or not an array.
 */
const getFirstElement = (array: any[]): any | number => {
  if (!Array.isArray(array) || array.length === 0) return -1;
  return array[0];
};

export default getFirstElement;
