

/*---
esid: sec-addrestrictedfunctionproperties
description: >
  Function.prototype.arguments and Function.prototype.arguments are both
  accessor properties whose set and get functions are both %ThrowTypeError%.
info: |
  2. Let _thrower_ be _realm_.[[Intrinsics]].[[%ThrowTypeError%]].
  3. Perform ! DefinePropertyOrThrow(_F_, *"caller"*, PropertyDescriptor { [[Get]]: _thrower_, [[Set]]: _thrower_, [[Enumerable]]: *false*, [[Configurable]]: *true* }).
  4. Perform ! DefinePropertyOrThrow(_F_, *"arguments"*, PropertyDescriptor { [[Get]]: _thrower_, [[Set]]: _thrower_, [[Enumerable]]: *false*, [[Configurable]]: *true* }).
---*/

const callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");
const argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, "arguments");


assert.sameValue(callerDesc.get, argumentsDesc.get,
  "Function.prototype.arguments and Function.prototype.caller accessor functions should match (%ThrowTypeError%)");
