

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const iter = [].values();
const array = iter.toArray();

assert.sameValue(Array.isArray(array), true);
assert.sameValue(array.length, 0);

