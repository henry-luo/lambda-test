

/*---
description: Testing descriptor property of Array.isArray
includes: [propertyHelper.js]
esid: sec-array.isarray
---*/

verifyProperty(Array, "isArray", {
  writable: true,
  enumerable: false,
  configurable: true
});
