

/*---
es5id: 15.3.5.4_2-15gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (New'ed object from FunctionDeclaration defined
    within strict mode)
flags: [onlyStrict]
---*/

function f() {
  gNonStrict();
}

assert.throws(TypeError, function() {
  new f();
});

function gNonStrict() {
  return gNonStrict.caller;
}
