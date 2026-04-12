

/*---
esid: sec-%typedarray%.prototype.find
description: >
  %TypedArray%.prototype.find.name is "find".
info: |
  %TypedArray%.prototype.find (predicate [ , thisArg ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testTypedArray.js]
features: [TypedArray]
---*/

verifyProperty(TypedArray.prototype.find, "name", {
  value: "find",
  writable: false,
  enumerable: false,
  configurable: true
});
