

/*---
esid: sec-properties-of-the-weakset-constructor
description: >
  The length property of the WeakSet constructor is 0.
includes: [propertyHelper.js]
---*/

verifyProperty(WeakSet, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
