

/*---
es5id: 15.3.5.4_2-32gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (Anonymous FunctionExpression defined within a
    FunctionDeclaration with a strict directive prologue)
flags: [noStrict]
---*/

function f1() {
  "use strict";
  (function() {
    gNonStrict();
  })();
}

assert.throws(TypeError, function() {
  f1();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
