

/*---
esid: sec-array.prototype.concat
description: Array.prototype.concat holey sloppy arguments
includes: [compareArray.js]
features: [Symbol.isConcatSpreadable]
---*/
var args = (function(a) {
  return arguments;
})(1, 2, 3);
delete args[1];
args[Symbol.isConcatSpreadable] = true;
assert.compareArray([1, void 0, 3, 1, void 0, 3], [].concat(args, args),
  '[1, void 0, 3, 1, void 0, 3] must return the same value returned by [].concat(args, args)'
);
