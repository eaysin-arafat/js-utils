import createProxy from "./create-proxy";
import deepClone from "./deep-clone";
import deepEqual from "./deep-equal";
import deepFreeze from "./deep-freeze";
import deepMapKeys from "./deep-map-keys";
import deepMapValues from "./deep-map-values";
import deepMerge from "./deep-merge";
import diffObjects from "./diff-objects";
import filterKeys from "./filter-keys";
import flattenObject from "./flatten-object";
import getNestedValue from "./get-nested-value";
import invertObject from "./invert-object";
import isPlainObject from "./is-plain-object";
import mapKeys from "./map-keys";
import mapValues from "./map-values";
import mergeObjects from "./merge-objects";
import omit from "./omit";
import pick from "./pick";
import setNestedValue from "./set-nested-value";
import transformKeys from "./transform-keys";
import transformValues from "./transform-values";
import unflattenObject from "./unflatten-object";

// Define the types for the exported functions
interface ObjectUtils {
  deepClone: typeof deepClone;
  mergeObjects: typeof mergeObjects;
  deepFreeze: typeof deepFreeze;
  pick: typeof pick;
  omit: typeof omit;
  deepMerge: typeof deepMerge;
  getNestedValue: typeof getNestedValue;
  setNestedValue: typeof setNestedValue;
  invertObject: typeof invertObject;
  isPlainObject: typeof isPlainObject;
  mapKeys: typeof mapKeys;
  deepEqual: typeof deepEqual;
  diffObjects: typeof diffObjects;
  flattenObject: typeof flattenObject;
  unflattenObject: typeof unflattenObject;
  mapValues: typeof mapValues;
  filterKeys: typeof filterKeys;
  deepMapKeys: typeof deepMapKeys;
  deepMapValues: typeof deepMapValues;
  transformKeys: typeof transformKeys;
  transformValues: typeof transformValues;
  createProxy: typeof createProxy;
  // Add types for other functions...
}

const objectUtils: ObjectUtils = {
  deepClone,
  mergeObjects,
  deepFreeze,
  pick,
  omit,
  deepMerge,
  getNestedValue,
  setNestedValue,
  invertObject,
  isPlainObject,
  mapKeys,
  deepEqual,
  diffObjects,
  flattenObject,
  unflattenObject,
  mapValues,
  filterKeys,
  deepMapKeys,
  deepMapValues,
  transformKeys,
  transformValues,
  createProxy,
  // Add other functions here...
};

export default objectUtils;
