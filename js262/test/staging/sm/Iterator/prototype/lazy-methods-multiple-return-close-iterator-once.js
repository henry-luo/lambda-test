

/*---
esid: pending
description: |
  Calling `.return()` on a lazy %Iterator.prototype% method multiple times closes the source iterator once.
info: |
  Iterator Helpers proposal 2.1.5
features:
  - iterator-helpers
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
---*/


class TestIterator extends Iterator {
  next() { 
    return {done: false, value: 1};
  }

  closeCount = 0;
  return(value) {
    this.closeCount++;
    return {done: true, value};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.flatMap(x => [x]),
];


for (const method of methods) {
  const iter = new TestIterator();
  const iterHelper = method(iter);
  iterHelper.next();

  assert.sameValue(iter.closeCount, 0);
  iterHelper.return();
  assert.sameValue(iter.closeCount, 1);
  iterHelper.return();
  assert.sameValue(iter.closeCount, 1);
}


for (const method of methods) {
  const iter = new TestIterator();
  const iterHelper = method(iter);

  assert.sameValue(iter.closeCount, 0);
  iterHelper.return();
  assert.sameValue(iter.closeCount, 1);
  iterHelper.return();
  assert.sameValue(iter.closeCount, 1);
}

