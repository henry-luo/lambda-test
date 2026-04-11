

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

assert.throws(TypeError, () => iter.reduce(), TypeError);
assert.throws(
  otherGlobal.TypeError,
  otherGlobal.Iterator.prototype.reduce.bind(iter),
  'TypeError comes from the realm of the method.',
);

