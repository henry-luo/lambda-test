

/*---
es5id: 15.3.5.4_2-5gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Anonymous FunctionExpression defined within
    strict mode)
flags: [onlyStrict]
---*/

assert.throws(TypeError, function() {
  (function() {
    gNonStrict();
  })();
});

function gNonStrict() {
  return gNonStrict.caller;
}
