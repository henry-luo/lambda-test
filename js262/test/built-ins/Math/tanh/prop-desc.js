

/*---
description: Testing descriptor property of Math.tanh
includes: [propertyHelper.js]
es6id: 20.2.2.34
---*/

verifyProperty(Math, "tanh", {
  writable: true,
  enumerable: false,
  configurable: true
});
