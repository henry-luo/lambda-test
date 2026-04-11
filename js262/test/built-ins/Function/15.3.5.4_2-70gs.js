

/*---
es5id: 15.3.5.4_2-70gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (strict function declaration called by
    Function.prototype.bind()())
flags: [noStrict]
---*/

function f() {
  "use strict";
  gNonStrict();
};

assert.throws(TypeError, function() {
  f.bind()();
});

function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}
