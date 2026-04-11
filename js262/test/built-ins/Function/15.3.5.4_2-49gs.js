

/*---
es5id: 15.3.5.4_2-49gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (Literal getter includes strict directive
    prologue)
flags: [noStrict]
---*/

var o = {
  get foo() {
    "use strict";
    gNonStrict();
  }
}

assert.throws(TypeError, function() {
  o.foo;
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
