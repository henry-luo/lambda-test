

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError%.length is 0.
info: |
  %ThrowTypeError% ( )

  The length property of a %ThrowTypeError% function has the attributes
  { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.
includes: [propertyHelper.js]
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function() {
  "use strict";
  return arguments;
}(), "callee").get;

verifyProperty(ThrowTypeError, "length", {
  value: 0,
  writable: false,
  enumerable: false,
  configurable: false
});
