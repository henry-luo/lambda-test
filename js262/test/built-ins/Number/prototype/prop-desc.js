

/*---
esid: sec-number.prototype
description: >
  "prototype" property of Number
info: |
  Number.prototype

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Number, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
