

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

const reducer = (x, y) => 0;
const iterator = [].values();

assert.sameValue(iterator.reduce(reducer, 1), 1);

