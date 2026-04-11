

/*---
esid: sec-array.prototype.findindex
description: Property type and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

assert.sameValue(
  typeof Array.prototype.findIndex,
  'function',
  '`typeof Array.prototype.findIndex` is `function`'
);

verifyProperty(Array.prototype, "findIndex", {
  writable: true,
  enumerable: false,
  configurable: true
});
