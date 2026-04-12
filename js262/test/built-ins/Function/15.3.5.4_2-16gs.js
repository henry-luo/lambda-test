

/*---
es5id: 15.3.5.4_2-16gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (New'ed object from FunctionDeclaration
    includes strict directive prologue)
flags: [noStrict]
---*/

function f() {
  "use strict";
  gNonStrict();
}

assert.throws(TypeError, function() {
  new f();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
