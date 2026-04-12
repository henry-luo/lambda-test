

/*---
es5id: 15.3.5.4_2-88gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.call(globalObject))
flags: [noStrict]
features: [caller]
---*/

var global = this;

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  f.call(global);
})();


function gNonStrict() {
  return gNonStrict.caller;
}
