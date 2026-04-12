

/*---
esid: sec-array.of
description: >
  Array.of property descriptor
info: |
  Array.of ( ...items )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array, "of", {
  writable: true,
  enumerable: false,
  configurable: true
});
