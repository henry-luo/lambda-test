

/*---
esid: sec-array.prototype.fill
description: >
  Array.prototype.fill.name value and descriptor.
info: |
  22.1.3.6 Array.prototype.fill (value [ , start [ , end ] ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.fill, "name", {
  value: "fill",
  writable: false,
  enumerable: false,
  configurable: true
});
