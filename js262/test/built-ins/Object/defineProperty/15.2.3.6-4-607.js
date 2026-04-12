

/*---
es5id: 15.2.3.6-4-607
description: ES5 Attributes - all attributes in Object.isSealed are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "isSealed", {
  writable: true,
  enumerable: false,
  configurable: true,
});
