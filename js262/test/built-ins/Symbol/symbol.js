

/*---
esid: sec-symbol-constructor
description: >
  The Symbol constructor is the %Symbol% intrinsic object and the initial
  value of the Symbol property of the global object.

includes: [propertyHelper.js]
features: [Symbol]
---*/

verifyProperty(this, "Symbol", {
  writable: true,
  enumerable: false,
  configurable: true
});
