

/*---
es5id: 15.2.3.6-4-615
description: ES5 Attributes - all attributes in Array.prototype.some are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype, "some", {
  writable: true,
  enumerable: false,
  configurable: true,
});
