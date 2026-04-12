

/*---
es5id: 15.2.3.6-4-601
description: ES5 Attributes - all attributes in Object.create are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "getPrototypeOf", {
  writable: true,
  enumerable: false,
  configurable: true,
});
