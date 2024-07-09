/**
 * Converts an array of key-value pairs into a new object.
 *
 * This function takes an array where each element is an array of length 2.
 * The first element of the inner array is used as the key, and the second element is used as the value.
 * The function iterates through the array and creates a new object, assigning each key-value pair to the object.
 *
 * @param {Array<[string | number, any]>} array - An array of key-value pairs (arrays of length 2).
 *
 * @returns {object} A new object containing the key-value pairs from the input array.
 *
 * @throws {TypeError} If any element in the input array is not an array of length 2.
 */
const fromPairs = (array: Array<[string | number, any]>): object => {
  // Ensure the input is an array
  if (!Array.isArray(array)) {
    throw new TypeError("The 'array' argument must be an array.");
  }

  // Modern approach using Object.fromEntries for efficiency (if supported)
  if (typeof Object.fromEntries === "function") {
    return Object.fromEntries(array);
  }

  // Fallback approach using a loop for older environments
  const output: { [key: string]: any } = {};
  for (const [key, _] of array) {
    // Validate each element's structure (array of length 2)
    if (!Array.isArray(key) || key.length !== 2) {
      throw new TypeError(
        "Each element in the 'array' must be an array of length 2."
      );
    }
    output[key[0]] = key[1]; // Destructure key and value from the inner array
  }
  return output;
};

export default fromPairs;
