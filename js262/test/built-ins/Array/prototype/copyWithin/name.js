

/*---
esid: sec-array.prototype.copywithin
description: >
  Array.prototype.copyWithin.name value and descriptor.
info: |
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.copyWithin, "name", {
  value: "copyWithin",
  writable: false,
  enumerable: false,
  configurable: true
});
