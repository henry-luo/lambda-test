

/*---
esid: sec-array.prototype.findlast
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
features: [array-find-from-last]
---*/

assert.sameValue(
  typeof Array.prototype.findLast,
  'function',
  '`typeof Array.prototype.findLast` is `function`'
);

verifyProperty(Array.prototype, "findLast", {
  enumerable: false,
  writable: true,
  configurable: true
});
