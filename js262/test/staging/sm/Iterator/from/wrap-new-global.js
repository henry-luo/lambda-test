

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/
const otherGlobal = $262.createRealm().global;

const iter = [1, 2, 3].values();
assert.sameValue(iter, Iterator.from(iter));
assert.sameValue(iter !== otherGlobal.Iterator.from(iter), true);

