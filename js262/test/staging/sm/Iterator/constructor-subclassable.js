

/*---
info: |
  Iterator constructor can be subclassed.

  Iterator is not enabled unconditionally
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
description: |
  pending
esid: pending
---*/
class TestIterator extends Iterator {
}

assert.sameValue(new TestIterator() instanceof Iterator, true);

