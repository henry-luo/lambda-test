

/*---
es5id: 15.3.5.4_2-1gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (FunctionDeclaration defined within strict mode)
flags: [onlyStrict]
---*/

function f() {
  gNonStrict();
}

assert.throws(TypeError, function() {
  f();
});

function gNonStrict() {
  return gNonStrict.caller;
}
