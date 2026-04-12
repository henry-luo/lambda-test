

/*---
es5id: 15.2.3.6-4-619
description: >
    ES5 Attributes - all attributes in Array.prototype.reduce are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype, "reduce", {
  writable: true,
  enumerable: false,
  configurable: true,
});
