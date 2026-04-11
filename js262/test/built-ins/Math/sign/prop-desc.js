

/*---
description: Testing descriptor property of Math.sign
includes: [propertyHelper.js]
es6id: 20.2.2.29
---*/

verifyProperty(Math, "sign", {
  writable: true,
  enumerable: false,
  configurable: true
});
