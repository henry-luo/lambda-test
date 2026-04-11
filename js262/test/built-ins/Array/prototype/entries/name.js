

/*---
esid: sec-array.prototype.entries
description: >
  Array.prototype.entries.name value and descriptor.
info: |
  22.1.3.4 Array.prototype.entries ( )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.entries, "name", {
  value: "entries",
  writable: false,
  enumerable: false,
  configurable: true
});
