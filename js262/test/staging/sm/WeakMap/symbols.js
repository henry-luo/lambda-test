

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
info: |
  requires shell-options
description: |
  pending
esid: pending
---*/
var m = new WeakMap;
var sym = Symbol();
m.set(sym, 0);
assert.sameValue(m.get(sym), 0);


var sym1 = Symbol.for("testKey");
assertThrowsInstanceOf(() => m.set(sym1, 1), TypeError);


var sym2 = Symbol.hasInstance;
m.set(sym2, 2);
assert.sameValue(m.get(sym2), 2);

