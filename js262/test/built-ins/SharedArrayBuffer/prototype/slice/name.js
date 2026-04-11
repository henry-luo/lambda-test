

/*---
description: >
  SharedArrayBuffer.prototype.slice.name is "slice".
info: |
  SharedArrayBuffer.prototype.slice ( start, end )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [SharedArrayBuffer]
---*/

verifyProperty(SharedArrayBuffer.prototype.slice, "name", {
  value: "slice",
  writable: false,
  enumerable: false,
  configurable: true
});
