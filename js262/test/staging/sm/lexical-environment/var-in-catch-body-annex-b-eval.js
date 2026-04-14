

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var x = "global-x";
var log = "";


function g() {
  try { throw 8; } catch (x) {
    eval("var x = 42;");
    log += x;
  }
  x = "g";
  log += x;
}
g();

assert.sameValue(x, "global-x");
assert.sameValue(log, "42g");

