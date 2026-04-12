

/*---
es5id: 15.2.3.6-4-604
description: ES5 Attributes - all attributes in Object.seal are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "seal", {
  writable: true,
  enumerable: false,
  configurable: true,
});
