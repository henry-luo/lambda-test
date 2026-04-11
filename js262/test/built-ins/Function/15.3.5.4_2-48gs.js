

/*---
es5id: 15.3.5.4_2-48gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Literal getter defined within strict mode)
flags: [onlyStrict]
---*/

var o = {
  get foo() {
    gNonStrict();
  }
}

assert.throws(TypeError, function() {
  o.foo;
});

function gNonStrict() {
  return gNonStrict.caller;
}
