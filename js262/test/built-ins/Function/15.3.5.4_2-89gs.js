

/*---
es5id: 15.3.5.4_2-89gs
description: >
    Strict mode - checking access to strict function caller from
    non-strict function (non-strict function declaration called by
    strict Function.prototype.bind()())
flags: [noStrict]
features: [caller]
---*/

function f() {
  return gNonStrict();
};
(function() {
  "use strict";
  f.bind()();
})();


function gNonStrict() {
  return gNonStrict.caller;
}
