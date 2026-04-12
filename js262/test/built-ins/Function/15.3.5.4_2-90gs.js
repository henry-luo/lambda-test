

/*---
es5id: 15.3.5.4_2-90gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.bind(null)())
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  f.bind(null)();
})();


function gNonStrict() {
  return gNonStrict.caller;
}
