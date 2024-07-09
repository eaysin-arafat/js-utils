/**
 * Creates a new array containing all elements except the last one from the input array.
 *
 * @param {any[]} array - The array to process.
 *
 * @returns {any[]} A new array containing all elements except the last one from the input array.
 *
 * @throws {TypeError} If the argument is not an array.
 */
const initial = (array: any[]): any[] => {
  // Check if the input is a valid array
  if (!Array.isArray(array)) {
    throw new TypeError("The argument must be an array.");
  }

  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
};

export default initial;
