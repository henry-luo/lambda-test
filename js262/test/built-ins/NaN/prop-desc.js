

/*---
esid: sec-value-properties-of-the-global-object-nan
description: Property descriptor of NaN
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(this, "NaN", {
  enumerable: false,
  writable: false,
  configurable: false
});
