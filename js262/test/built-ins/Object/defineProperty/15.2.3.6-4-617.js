

/*---
es5id: 15.2.3.6-4-617
description: ES5 Attributes - all attributes in Array.prototype.map are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype, "map", {
  writable: true,
  enumerable: false,
  configurable: true,
});
