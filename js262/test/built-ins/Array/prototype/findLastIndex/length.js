

/*---
esid: sec-array.prototype.findlastindex
description: Array.prototype.findLastIndex.length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  Array.prototype.findLastIndex.length, 1,
  'The value of `Array.prototype.findLastIndex.length` is `1`'
);

verifyProperty(Array.prototype.findLastIndex, "length", {
  enumerable: false,
  writable: false,
  configurable: true
});
