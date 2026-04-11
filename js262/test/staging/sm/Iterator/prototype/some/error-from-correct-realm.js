

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
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

const iter = [].values();

assert.throws(TypeError, () => iter.some());
assert.throws(
  otherGlobal.TypeError, 
  otherGlobal.Iterator.prototype.some.bind(iter),
  'TypeError comes from the realm of the method.',
);

