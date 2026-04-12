

/*---
esid: sec-math.sqrt2
description: >
  "SQRT2" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, 'SQRT2', {
  writable: false,
  enumerable: false,
  configurable: false,
});
