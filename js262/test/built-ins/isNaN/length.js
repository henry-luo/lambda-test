

/*---
esid: sec-isnan-number
description: >
  The length property of isNaN is 1
includes: [propertyHelper.js]
---*/

verifyProperty(isNaN, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
