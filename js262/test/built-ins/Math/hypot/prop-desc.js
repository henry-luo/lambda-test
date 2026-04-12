

/*---
description: Testing descriptor property of Math.hypot
includes: [propertyHelper.js]
es6id: 20.2.2.18
---*/

verifyProperty(Math, "hypot", {
  writable: true,
  enumerable: false,
  configurable: true
});
