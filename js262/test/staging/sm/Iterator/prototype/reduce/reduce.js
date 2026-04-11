

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const reducer = (acc, value) => acc + value;
const iterator = [1, 2, 3].values();

assert.sameValue(iterator.reduce(reducer, 0), 6);

