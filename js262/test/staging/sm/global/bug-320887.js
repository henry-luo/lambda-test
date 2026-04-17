

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var hit = 0;
Object.defineProperty(this, "x", {
    get: function () { return ++hit; },
    configurable: true
});
eval("var x;");
assert.sameValue(hit, 0);


assert.sameValue(x, 1);
assert.sameValue(x, 2);

