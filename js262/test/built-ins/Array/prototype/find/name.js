

/*---
esid: sec-array.prototype.find
description: >
  Array.prototype.find.name value and descriptor.
info: |
  22.1.3.8 Array.prototype.find ( predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects

includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.find, "name", {
  value: "find",
  writable: false,
  enumerable: false,
  configurable: true
});
