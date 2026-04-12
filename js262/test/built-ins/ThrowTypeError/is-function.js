

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is a function object.
info: |
  %ThrowTypeError% ( )

  The %ThrowTypeError% intrinsic is an anonymous built-in function
  object that is defined once for each realm.
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function() {
  "use strict";
  return arguments;
}(), "callee").get;

assert.sameValue(typeof ThrowTypeError, "function");
