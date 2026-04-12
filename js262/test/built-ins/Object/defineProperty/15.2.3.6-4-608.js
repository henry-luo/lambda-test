

/*---
es5id: 15.2.3.6-4-608
description: ES5 Attributes - all attributes in Object.isFrozen are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Object, "isFrozen", {
  writable: true,
  enumerable: false,
  configurable: true,
});
