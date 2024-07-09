/**
 * Removes duplicate elements from a sorted array, comparing elements based on a custom comparison function or property.
 *
 * @param {any[]} array - The sorted array to remove duplicates from (ascending order assumed).
 * @param {(item: any) => any} [iteratee] (optional) A function that receives an element and returns the value to use for comparison. Defaults to the entire element if not provided.
 *
 * @returns {any[]} A new array containing only the unique elements from the original array based on the comparison function or property.
 */
const sortedUniqBy = (array: any[], iteratee?: (item: any) => any): any[] => {
  // Check if iteratee is a function (optional argument)
  const isFunction = typeof iteratee === "function";
  // Create a Set to store unique keys based on iteratee or element itself
  const seen = new Set();

  return array.filter((element) => {
    // Define the key to compare for uniqueness based on iteratee
    const key = isFunction ? iteratee(element) : element;

    // Check if the key has already been seen
    if (!seen.has(key)) {
      // Add the key to the set and include the element in the result
      seen.add(key);
      return true;
    }

    // If the key is already in the set, exclude the element
    return false;
  });
};

export default sortedUniqBy;
