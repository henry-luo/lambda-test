

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function C(){}
C.prototype = 1;
try {
    Object.defineProperty(C, "prototype", {get: function() { throw 0; }});
    actual = "no exception";
} catch (exc) {
    actual = exc.name;
}
new C; 
assert.sameValue(actual, "TypeError");
