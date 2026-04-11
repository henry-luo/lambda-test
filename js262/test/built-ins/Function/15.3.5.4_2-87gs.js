

/*---
es5id: 15.3.5.4_2-87gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.call(someObject))
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
var o = {};
(function() {
  "use strict";
  f.call(o);
})();


function gNonStrict() {
  return gNonStrict.caller;
}
