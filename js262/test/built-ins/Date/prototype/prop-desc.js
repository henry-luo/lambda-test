

/*---
esid: sec-date.prototype
description: >
  Property descriptor for Date.prototype.
info: |
  The initial value of Date.prototype is the Date prototype object.

  This property has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

verifyProperty(Date, "prototype", {
  writable: false,
  enumerable: false,
  configurable: false,
});
