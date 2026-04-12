

/*---
esid: sec-array.prototype.unshift
description: >
  Array.prototype.unshift.name is "unshift".
info: |
  Array.prototype.unshift ( ...items )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

verifyProperty(Array.prototype.unshift, "name", {
  value: "unshift",
  writable: false,
  enumerable: false,
  configurable: true
});
