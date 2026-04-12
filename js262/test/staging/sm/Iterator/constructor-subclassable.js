

/*---
info: |
  Iterator constructor can be subclassed.

  Iterator is not enabled unconditionally
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
class TestIterator extends Iterator {
}

assert.sameValue(new TestIterator() instanceof Iterator, true);

