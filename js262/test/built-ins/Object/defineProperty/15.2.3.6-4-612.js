

/*---
es5id: 15.2.3.6-4-612
description: >
    ES5 Attributes - all attributes in Array.prototype.indexOf are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype, "indexOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
