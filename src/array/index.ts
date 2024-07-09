// /**
//  * Utility functions for manipulating Arrays.
//  * This module exports various functions for common array operations.
//  */

// const head = require("./head");
// const chunk = require("./chunk");
// const compact = require("./compact");
// const concat = require("./concat");
// const difference = require("./difference");
// const drop = require("./drop");
// const dropRight = require("./dropRight");
// const fill = require("./fill");
// const flatten = require("./flatten");
// const flattenDeep = require("./flattenDeep");
// const flattenDepth = require("./flattenDepth");
// const fromPairs = require("./fromPairs");
// const indexOf = require("./indexOf");
// const initialize = require("./initialize");
// const intersection = require("./intersection");
// const intersectionByIndex = require("./intersectionByIndex");
// const join = require("./join");
// const last = require("./last");
// const lastIndexOf = require("./lastIndexOf");
// const nth = require("./nth");
// const pull = require("./pull");
// const pullAll = require("./pullAll");
// const pullAllBy = require("./pullAllBy");
// const pullAt = require("./pullAt");
// const remove = require("./remove");
// const reverse = require("./reverse");
// const slice = require("./slice");
// const sortedIndex = require("./sortedIndex");
// const sortedIndexBy = require("./sortedIndexBy");
// const sortedIndexOf = require("./sortedIndexOf");
// const sortedLastIndex = require("./sortedLastIndex");
// const sortedLastIndexOf = require("./sortedLastIndexOf");
// const sortedUniq = require("./sortedUniq");
// const sortedUniqBy = require("./sortedUniqBy");
// const tail = require("./tail");
// const take = require("./take");
// const takeRight = require("./takeRight");
// const union = require("./union");
// const unionBy = require("./unionBy");
// const uniq = require("./uniq");
// const uniqBy = require("./uniqBy");
// const unzip = require("./unzip");

// module.exports = {
//   head,
//   indexOf,
//   intersection,
//   last,
//   pull,
//   unzip,
//   uniqBy,
//   uniq,
//   unionBy,
//   union,
//   takeRight,
//   take,
//   tail,
//   sortedIndex,
//   sortedIndexBy,
//   sortedLastIndex,
//   sortedLastIndexOf,
//   sortedIndexOf,
//   initialize,
//   intersectionByIndex,
//   join,
//   lastIndexOf,
//   nth,
//   pullAll,
//   pullAllBy,
//   pullAt,
//   remove,
//   reverse,
//   slice,
//   sortedUniq,
//   sortedUniqBy,
//   chunk,
//   compact,
//   concat,
//   difference,
//   drop,
//   dropRight,
//   fill,
//   flatten,
//   flattenDeep,
//   flattenDepth,
//   fromPairs,
// };

import chunk from "./chunk";
import compact from "./compact";
import concat from "./concat";
import difference from "./difference";
import drop from "./drop";
import dropRight from "./dropRight";
import fill from "./fill";
import flatten from "./flatten";
import flattenDeep from "./flattenDeep";
import flattenDepth from "./flattenDepth";
import fromPairs from "./fromPairs";
import head from "./head";
import indexOf from "./indexOf";
// Import other functions as needed...

// Define the types for the exported functions
interface ArrayUtils {
  head: typeof head;
  chunk: typeof chunk;
  compact: typeof compact;
  concat: typeof concat;
  difference: typeof difference;
  drop: typeof drop;
  dropRight: typeof dropRight;
  fill: typeof fill;
  flatten: typeof flatten;
  flattenDeep: typeof flattenDeep;
  flattenDepth: typeof flattenDepth;
  fromPairs: typeof fromPairs;
  indexOf: typeof indexOf;
  // Add types for other functions...
}

const arrayUtils: ArrayUtils = {
  head,
  chunk,
  compact,
  concat,
  difference,
  drop,
  dropRight,
  fill,
  flatten,
  flattenDeep,
  flattenDepth,
  fromPairs,
  indexOf,
  // Add other functions here...
};

export default arrayUtils;
