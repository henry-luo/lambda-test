

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

let ta = new Int32Array([0, 1]).sort(() => 0);
assert.sameValue(ta[0], 0);
assert.sameValue(ta[1], 1);


let tb = new Int32Array([0, 1]).sort(() => NaN);
assert.sameValue(tb[0], 0);
assert.sameValue(tb[1], 1);

