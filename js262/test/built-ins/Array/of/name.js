

/*---
esid: sec-array.of
description: >
  Array.of.name value and property descriptor
info: |
  Array.of ( ...items )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.of, "name", {
  value: "of",
  writable: false,
  enumerable: false,
  configurable: true
});
