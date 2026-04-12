

/*---
esid: sec-function.prototype.tostring
description: >
  toString bound function does not throw (bound Function Expression)
info: |
  ...
  If func is a Bound Function exotic object or a built-in Function object,
  then return an implementation-dependent String source code representation
  of func. The representation must have the syntax of a NativeFunction
  ...
includes: [nativeFunctionMatcher.js]
---*/

assertNativeFunction(function() {}.bind({}));
