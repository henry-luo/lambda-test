

/*---
esid: sec-math.ln10
description: >
  "LN10" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, 'LN10', {
  writable: false,
  enumerable: false,
  configurable: false,
});
