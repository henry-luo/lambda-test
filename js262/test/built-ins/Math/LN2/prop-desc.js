

/*---
esid: sec-math.ln2
description: >
  "LN2" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, 'LN2', {
  writable: false,
  enumerable: false,
  configurable: false,
});
