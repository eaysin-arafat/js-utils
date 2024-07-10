/**
 * Recursively freezes an object to make it immutable.
 * @param obj - The object to freeze.
 * @returns The frozen object.
 */
const deepFreeze = <T extends object>(obj: T): T => {
  const propNames = Object.keys(obj) as (keyof T)[];

  for (const name of propNames) {
    const value = obj[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
};

export default deepFreeze;
