/**
 * Removes elements from an array that have matching values based on a comparison function or property with elements in another array.
 *
 * @param {T[]} array - The array to remove elements from.
 * @param {U[]} values - The array containing elements to be used for comparison.
 * @param {(value: T | U) => any} [iteratee] (optional) A function that receives an element and returns the value to use for comparison. Defaults to the entire element if not a function.
 *
 * @returns {T[]} A new array containing elements from the 'array' that don't have matching values in the 'values' array based on the comparison function or property.
 */
const pullAllBy = <T, U>(
  array: T[],
  values: U[],
  iteratee?: ((value: T | U) => any) | keyof T
): T[] => {
  const isFunction = typeof iteratee === "function";

  return array.filter((element) => {
    const compareValue = isFunction
      ? (iteratee as (value: T) => any)(element)
      : element[iteratee as keyof T];

    return !values.some((value) => {
      const compareValueToRemove = isFunction
        ? (iteratee as (value: U) => any)(value)
        : value[iteratee as unknown as keyof U];

      return compareValue === compareValueToRemove;
    });
  });
};

export default pullAllBy;
