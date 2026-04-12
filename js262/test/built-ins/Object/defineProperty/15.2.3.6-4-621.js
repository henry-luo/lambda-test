

/*---
es5id: 15.2.3.6-4-621
description: >
    ES5 Attributes - all attributes in String.prototype.trim are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(String.prototype, "trim", {
  writable: true,
  enumerable: false,
  configurable: true,
});
