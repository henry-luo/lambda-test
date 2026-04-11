

/*---
esid: sec-array.prototype.keys
description: >
  Array.prototype.keys.name value and descriptor.
info: |
  22.1.3.13 Array.prototype.keys ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.keys, "name", {
  value: "keys",
  writable: false,
  enumerable: false,
  configurable: true
});
