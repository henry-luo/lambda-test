

/*---
esid: sec-math.log10e
description: >
  "LOG10E" property of Math
info: |
  This property has the attributes { [[Writable]]: false, [[Enumerable]]:
  false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Math, 'LOG10E', {
  writable: false,
  enumerable: false,
  configurable: false,
});
