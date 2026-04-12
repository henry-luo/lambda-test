

/*---
esid: sec-array.prototype.keys
description: >
  Array.prototype.keys.length value and descriptor.
info: |
  22.1.3.13 Array.prototype.keys ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.keys, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
