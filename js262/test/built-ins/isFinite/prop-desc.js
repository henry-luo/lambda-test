

/*---
esid: sec-isfinite-number
description: >
  Property descriptor for isFinite
includes: [propertyHelper.js]
---*/

verifyProperty(this, "isFinite", {
  writable: true,
  enumerable: false,
  configurable: true
});
