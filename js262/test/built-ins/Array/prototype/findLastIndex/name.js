

/*---
esid: sec-array.prototype.findlastindex
description: >
  Array.prototype.findLastIndex.name value and descriptor.
info: |
  Array.prototype.findLastIndex ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  Array.prototype.findLastIndex.name, 'findLastIndex',
  'The value of `Array.prototype.findLastIndex.name` is `"findLastIndex"`'
);

verifyProperty(Array.prototype.findLastIndex, "name", {
  enumerable: false,
  writable: false,
  configurable: true
});
