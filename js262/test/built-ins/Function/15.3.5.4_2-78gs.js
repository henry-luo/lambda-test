

/*---
es5id: 15.3.5.4_2-78gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict new'ed Function constructor)
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  return new Function("return f();")();
})();


function gNonStrict() {
  return gNonStrict.caller;
}
