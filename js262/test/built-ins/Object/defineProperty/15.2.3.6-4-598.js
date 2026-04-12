

/*---
es5id: 15.2.3.6-4-598
description: >
    ES5 Attributes - all attributes in Object.getPrototypeOf are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "getPrototypeOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
