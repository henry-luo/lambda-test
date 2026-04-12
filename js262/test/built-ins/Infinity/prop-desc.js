

/*---
esid: sec-value-properties-of-the-global-object-infinity
description: Property descriptor of Infinity
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(this, "Infinity", {
  enumerable: false,
  writable: false,
  configurable: false
});
