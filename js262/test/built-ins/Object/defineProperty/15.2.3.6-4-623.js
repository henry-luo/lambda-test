

/*---
es5id: 15.2.3.6-4-623
description: >
    ES5 Attributes - all attributes in Date.prototype.toISOString are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "toISOString", {
  writable: true,
  enumerable: false,
  configurable: true,
});
