/**
 * Finds the union of elements from multiple arrays, removing duplicates based on a custom comparison function or property.
 *
 * @param {...(any[] | Function)} args - An arbitrary number of arrays and an optional comparison function.
 *   - The last argument can be a function used for custom comparison.
 *   - All other arguments must be arrays.
 *
 * @returns {any[]} A new array containing the unique elements from all input arrays based on the comparison function or property.
 *
 * @throws {TypeError} If any argument except the last is not an array.
 */
const unionBy = (...args: (any[] | Function)[]): any[] => {
  const arrays: any[][] = [];
  let iteratee: Function | undefined;

  // Extract the iteratee function if provided
  if (args.length > 0 && typeof args[args.length - 1] === "function") {
    iteratee = args.pop() as Function;
  }

  // Validate that all arguments except the last (potential iteratee) are arrays
  for (const arg of args) {
    if (!Array.isArray(arg)) {
      throw new TypeError("All arguments except the last must be arrays.");
    }
    arrays.push(arg);
  }

  const seen = new Set();
  const result: any[] = [];

  // Function to get the comparison key based on iteratee
  const getKey = (element: any) => (iteratee ? iteratee(element) : element);

  // Iterate through each array and add unique elements to result array
  for (const array of arrays) {
    for (const element of array) {
      const key = getKey(element);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(element);
      }
    }
  }

  return result;
};

export default unionBy;
