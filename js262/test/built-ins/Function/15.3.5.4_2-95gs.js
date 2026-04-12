

/*---
es5id: 15.3.5.4_2-95gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict, constructor-based function (FunctionDeclaration
    includes strict directive prologue)
flags: [noStrict]
---*/

var gNonStrict = Function("return gNonStrict.caller || gNonStrict.caller.throwTypeError;");

function f() {
  "use strict";
  gNonStrict();
}

assert.throws(TypeError, function() {
  f();
});
