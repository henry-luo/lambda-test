

/*---
es5id: 15.2.3.6-4-624
description: >
    ES5 Attributes - all attributes in Date.prototype.toJSON are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Date.prototype, "toJSON", {
  writable: true,
  enumerable: false,
  configurable: true,
});
