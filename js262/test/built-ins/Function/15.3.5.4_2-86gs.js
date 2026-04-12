

/*---
es5id: 15.3.5.4_2-86gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.call(undefined))
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  f.call(undefined);
})();


function gNonStrict() {
  return gNonStrict.caller;
}
