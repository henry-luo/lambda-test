

/*---
es5id: 15.3.5.4_2-76gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict eval)
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  return eval("f();");
})();


function gNonStrict() {
  return gNonStrict.caller;
}
