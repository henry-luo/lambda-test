

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js, compareArray.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

let g2 = createNewGlobal();
assert.compareArray(
    Int32Array.prototype.sort.call(new g2.Int32Array([3, 2, 1])),
    new Int32Array([1, 2, 3])
);

