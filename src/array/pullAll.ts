/**
 * Removes elements from an array that are present in another array (values).
 *
 * @param {T[]} array - The array to remove elements from.
 * @param {T[]} values - The array containing elements to remove from the 'array'.
 *
 * @returns {T[]} A new array containing elements from the 'array' that are not present in the 'values' array.
 *
 * @throws {TypeError} (implicitly) If any argument is not an array.
 */
const pullAll = <T>(array: T[], values: T[]): T[] => {
  const output: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (!values.includes(array[i])) {
      output.push(array[i]);
    }
  }

  return output;
};

export default pullAll;
