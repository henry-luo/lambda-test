

/*---
esid: sec-function.prototype.tostring
description: >
  toString of Proxy for function target does not throw (Arrow Function)
info: |
  ...
  If Type(func) is Object and IsCallable(func) is true, then return an
  implementation-dependent String source code representation of func.
  The representation must have the syntax of a NativeFunction.
  ...

  NativeFunction:
    function IdentifierName_opt ( FormalParameters ) { [ native code ] }

features: [arrow-function, Proxy]
includes: [nativeFunctionMatcher.js]
---*/

assertNativeFunction(new Proxy(() => {}, {}));
assertNativeFunction(new Proxy(() => {}, { apply() {} }).apply);
