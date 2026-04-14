

/*---
esid: sec-isnan-number
description: >
  Property descriptor for isNaN
includes: [propertyHelper.js]
---*/

verifyProperty(this, "isNaN", {
  writable: true,
  enumerable: false,
  configurable: true
});
