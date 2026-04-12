

/*---
info: |
  Iterator.from throws when called with a non-object.

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
assert.throws(TypeError, () => Iterator.from(undefined));
assert.throws(TypeError, () => Iterator.from(null));
assert.throws(TypeError, () => Iterator.from(0));
assert.throws(TypeError, () => Iterator.from(false));
assert.throws(TypeError, () => Iterator.from(Symbol('')));

