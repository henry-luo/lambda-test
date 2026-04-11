

/*---
es5id: 15.3.5.4_2-20gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (New'ed object from Anonymous
    FunctionExpression includes strict directive prologue)
flags: [noStrict]
---*/

assert.throws(TypeError, function() {
  var obj = new(function() {
    "use strict";
    gNonStrict();
  });
});


function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
