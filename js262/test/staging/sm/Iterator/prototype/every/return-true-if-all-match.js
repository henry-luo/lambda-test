

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const iter = [1, 3, 5].values();
const fn = (value) => value % 2 == 1;

assert.sameValue(iter.every(fn), true);

assert.sameValue([].values().every(x => x), true);

