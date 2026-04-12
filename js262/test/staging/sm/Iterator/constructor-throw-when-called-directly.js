

/*---
info: |
  Iterator constructor throws when called directly.

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
assert.throws(TypeError, () => new Iterator());

