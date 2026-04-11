

/*---
esid: sec-array.prototype.copywithin
description: Array.prototype.copyWithin.length value and descriptor.
info: |
  22.1.3.3 Array.prototype.copyWithin (target, start [ , end ] )

  The length property of the copyWithin method is 2.
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.copyWithin, "length", {
  value: 2,
  writable: false,
  enumerable: false,
  configurable: true
});
