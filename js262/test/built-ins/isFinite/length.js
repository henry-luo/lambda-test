

/*---
esid: sec-isfinite-number
description: >
  The length property of isFinite is 1
includes: [propertyHelper.js]
---*/

verifyProperty(isFinite, "length", {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: true
});
