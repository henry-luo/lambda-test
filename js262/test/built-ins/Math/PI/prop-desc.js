

/*---
esid: sec-math.pi
description: >
  "PI" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, 'PI', {
  writable: false,
  enumerable: false,
  configurable: false,
});
