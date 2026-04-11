

/*---
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

class TestIterator extends Iterator {
  next() {
    throw new Error();
  }
}

const iter = new TestIterator();

assert.throws(Error, () => iter.toArray());

