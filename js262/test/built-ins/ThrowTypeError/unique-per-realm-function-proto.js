

/*---
esid: sec-%throwtypeerror%
description: >
  %ThrowTypeError% is defined once for each realm.
info: |
  %ThrowTypeError% ( )

  The %ThrowTypeError% intrinsic is an anonymous built-in function
  object that is defined once for each realm.
---*/

var ThrowTypeError = Object.getOwnPropertyDescriptor(function() {
  "use strict";
  return arguments;
}(), "callee").get;


var argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, "arguments");
var callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");

assert.sameValue(ThrowTypeError, argumentsDesc.get, "arguments.get");
assert.sameValue(ThrowTypeError, argumentsDesc.set, "arguments.set");
assert.sameValue(ThrowTypeError, callerDesc.set, "caller.set");
assert.sameValue(ThrowTypeError, callerDesc.get, "caller.get");
