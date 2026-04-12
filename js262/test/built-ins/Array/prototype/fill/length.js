

/*---
esid: sec-array.prototype.fill
description: Array.prototype.fill.length value and descriptor.
info: |
  17 ECMAScript Standard Built-in Objects
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.fill, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
