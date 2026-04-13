

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function g() {
      return g.caller;
}

(async function f() {
  var inner = g();
  assert.sameValue(inner, null);
})();

(async function f() {
  "use strict";
  var inner = g();
  assert.sameValue(inner, null);
})();

