

/*---
description: Testing descriptor property of Math.sinh
includes: [propertyHelper.js]
es6id: 20.2.2.31
---*/

verifyProperty(Math, "sinh", {
  writable: true,
  enumerable: false,
  configurable: true
});
