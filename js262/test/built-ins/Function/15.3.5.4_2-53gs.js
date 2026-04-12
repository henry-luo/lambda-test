

/*---
es5id: 15.3.5.4_2-53gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (Injected getter includes strict directive
    prologue)
flags: [noStrict]
---*/

var o = {};
Object.defineProperty(o, "foo", {
  get: function() {
    "use strict";
    gNonStrict();
  }
});

assert.throws(TypeError, function() {
  o.foo;
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
