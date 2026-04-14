

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var g = createNewGlobal();

let f = g.eval('(function (expected) { this.accept = new.target === expected; })');

for (let i = 0; i < 1100; i++)
    assert.sameValue(new f(f).accept, true);

