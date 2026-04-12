

/*---
es5id: 15.2.3.6-4-622
description: ES5 Attributes - all attributes in Date.now are correct
includes: [propertyHelper.js]
---*/

verifyProperty(Date, "now", {
  writable: true,
  enumerable: false,
  configurable: true,
});

