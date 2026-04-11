

/*---
esid: sec-array.prototype.findindex
description: >
  Array.prototype.findIndex.name value and descriptor.
info: |
  22.1.3.9 Array.prototype.findIndex ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.findIndex, "name", {
  value: "findIndex",
  writable: false,
  enumerable: false,
  configurable: true
});
