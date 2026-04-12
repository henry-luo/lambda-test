

/*---
es5id: 15.3.5.4_2-30gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (FunctionDeclaration defined within a
    FunctionDeclaration with a strict directive prologue)
flags: [noStrict]
---*/

function f1() {
  "use strict";

  function f() {
    gNonStrict();
  }
  f();
}

assert.throws(TypeError, function() {
  f1();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
