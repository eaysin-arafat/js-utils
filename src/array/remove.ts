/**
 * Removes elements from an array that satisfy a given predicate function.
 *
 * @param {T[]} array - The array to remove elements from.
 * @param {(element: T) => boolean} predicate - A function that takes an element from the array and returns true if the element should be removed, false otherwise.
 *   - If the predicate is not a function, the original array is returned unchanged.
 *
 * @returns {T[]} A new array containing the elements from the original array that do not satisfy the predicate function.
 *
 * @throws {TypeError} (implicitly) If the predicate is not a function.
 */
const remove = <T>(array: T[], predicate: (element: T) => boolean): T[] => {
  // Type check for predicate
  if (typeof predicate !== "function") {
    throw new TypeError("Predicate must be a callable function.");
  }

  return array.filter((element) => !predicate(element));
};

export default remove;
