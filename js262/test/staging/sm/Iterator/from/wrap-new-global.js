

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
const otherGlobal = createNewGlobal({newCompartment: true});

const iter = [1, 2, 3].values();
assert.sameValue(iter, Iterator.from(iter));
assert.sameValue(iter !== otherGlobal.Iterator.from(iter), true);

