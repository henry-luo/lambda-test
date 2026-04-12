

/*---
esid: sec-array.of
description: >
  Array.of.length value and property descriptor
info: |
  Array.of ( ...items )

  The length property of the of function is 0.
includes: [propertyHelper.js]
---*/

verifyProperty(Array.of, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: true
});
