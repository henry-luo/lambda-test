

/*---
description: Object.fromEntries.length is 1.
esid: sec-object.fromentries
includes: [propertyHelper.js]
features: [Object.fromEntries]
---*/

verifyProperty(Object.fromEntries, "length", {
  value: 1,
  enumerable: false,
  writable: false,
  configurable: true
});
