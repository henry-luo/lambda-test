

/*---
esid: sec-undefined
description: Property descriptor of undefined
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(this, "undefined", {
  enumerable: false,
  writable: false,
  configurable: false
});
