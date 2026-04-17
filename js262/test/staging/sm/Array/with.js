

/*---
includes: [sm/non262.js, sm/non262-shell.js, deepEqual.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

Object.defineProperty(Array.prototype, 0, {
  set() {
    throw "bad";
  },
});


assert.deepEqual([0].with(0, 1), [1]);


assert.deepEqual([1, 2].with(0, 3), [3, 2]);
assert.deepEqual([1, 2].with(1, 3), [1, 3]);

