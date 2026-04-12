

/*---
description: Testing descriptor property of Object.assign
includes: [propertyHelper.js]
es6id: 19.1.2.1
---*/

verifyProperty(Object, "assign", {
  writable: true,
  enumerable: false,
  configurable: true,
});
