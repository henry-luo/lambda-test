

/*---
es5id: 15.3.5.4_2-29gs
description: >
    Strict mode - checking access to strict function caller from
    strict function (Anonymous FunctionExpression defined within an
    Anonymous FunctionExpression inside strict mode)
flags: [onlyStrict]
---*/

assert.throws(TypeError, function() {
  (function() {
    (function() {
      gNonStrict();
    })();
  })();
});

function gNonStrict() {
  return gNonStrict.caller;
}
