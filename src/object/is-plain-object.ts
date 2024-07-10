/**
 * Checks if a value is a plain object.
 * @param value - The value to check.
 * @returns True if the value is a plain object, otherwise false.
 */
const isPlainObject = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

export default isPlainObject;
