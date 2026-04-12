

/*---
es5id: 15.3.5.4_2-45gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (FunctionDeclaration with a strict directive
    prologue defined within an Anonymous FunctionExpression)
flags: [noStrict]
---*/

assert.throws(TypeError, function() {
  (function() {
    function f() {
      "use strict";
      gNonStrict();
    }
    return f();
  })();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
