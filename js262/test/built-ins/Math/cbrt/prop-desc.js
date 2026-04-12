

/*---
description: Testing descriptor property of Math.cbrt
includes: [propertyHelper.js]
es6id: 20.2.2.9
---*/

verifyProperty(Math, "cbrt", {
  writable: true,
  enumerable: false,
  configurable: true
});
