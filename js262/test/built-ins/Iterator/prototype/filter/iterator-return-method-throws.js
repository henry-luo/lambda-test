

/*---
esid: sec-iteratorprototype.filter
description: >
  Iterator has throwing return
info: |
  %Iterator.prototype%.filter ( predicate )

features: [iterator-helpers]
flags: []
---*/
class IteratorThrows extends Iterator {
  next() {
    return {
      done: false,
      value: 0,
    };
  }
  return() {
    throw new Test262Error();
  }
}

let iterator = new IteratorThrows().filter(() => false);

assert.throws(Test262Error, function () {
  iterator.return();
});
