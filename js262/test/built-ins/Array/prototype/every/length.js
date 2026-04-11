

/*---
esid: sec-array.prototype.every
description: >
  Array.prototype.every.length value and property descriptor
info: |
  Array.prototype.every ( callbackfn [ , thisArg] )
  The length property of the of function is 1.
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.every, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
