

/*---
es5id: 15.2.3.6-4-600
description: >
    ES5 Attributes - all attributes in Object.getOwnPropertyNames are
    correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "getOwnPropertyNames", {
  writable: true,
  enumerable: false,
  configurable: true,
});
