

/*---
esid: sec-number.prototype.constructor
description: >
  Property descriptor and value for Number.prototype.constructor
info: |
  Number.prototype.constructor

  The initial value of Number.prototype.constructor is the intrinsic object
  %Number%.
includes: [propertyHelper.js]
---*/

assert.sameValue(Number.prototype.constructor, Number);

verifyProperty(Number.prototype, "constructor", {
  writable: true,
  enumerable: false,
  configurable: true,
});
