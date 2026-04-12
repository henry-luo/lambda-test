

/*---
es5id: 15.3.5.4_2-2gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (FunctionDeclaration includes strict directive
    prologue)
flags: [noStrict]
---*/

function f() {
  "use strict";
  gNonStrict();
}

assert.throws(TypeError, function() {
  f();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
