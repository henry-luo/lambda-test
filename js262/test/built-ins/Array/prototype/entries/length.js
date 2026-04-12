

/*---
esid: sec-array.prototype.entries
description: >
  Array.prototype.entries.length value and descriptor.
info: |
  22.1.3.4 Array.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.entries, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
