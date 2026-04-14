

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function f(y) {
    eval("{ let z=2, w=y; (function () { w.p = 7; })(); }");
}
var x = {};
f(x);
assert.sameValue(x.p, 7);
