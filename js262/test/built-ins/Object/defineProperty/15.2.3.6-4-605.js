

/*---
es5id: 15.2.3.6-4-605
description: ES5 Attributes - all attributes in Object.freeze are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "freeze", {
  writable: true,
  enumerable: false,
  configurable: true,
});
