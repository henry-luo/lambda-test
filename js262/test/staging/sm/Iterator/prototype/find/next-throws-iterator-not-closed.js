

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

class TestIterator extends Iterator {
  next() {
    throw new Error();
  }

  closed = false;
  return() {
    this.closed = true;
  }
}

const fn = x => x;
const iter = new TestIterator();

assert.sameValue(iter.closed, false);
assertThrowsInstanceOf(() => iter.find(fn), Error);
assert.sameValue(iter.closed, false);

