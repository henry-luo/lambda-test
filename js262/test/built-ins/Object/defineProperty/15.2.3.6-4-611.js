

/*---
es5id: 15.2.3.6-4-611
description: >
    ES5 Attributes - all attributes in Function.prototype.bind are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Function.prototype, "bind", {
  writable: true,
  enumerable: false,
  configurable: true,
});
