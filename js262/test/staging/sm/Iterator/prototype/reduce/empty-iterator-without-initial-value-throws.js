

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
assert.throws(TypeError, () => iter.reduce((x, y) => x + y));

