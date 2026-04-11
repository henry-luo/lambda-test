

/*---
esid: sec-properties-of-the-weakmap-constructor
description: >
  The length property of the WeakMap constructor is 0.
includes: [propertyHelper.js]
---*/

verifyProperty(WeakMap, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
