

/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator return is throwing getter
info: |
  %Iterator.prototype%.filter ( predicate )

features: [iterator-helpers]
flags: []
---*/
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1,
    };
  }
  get return() {
    throw new Test262Error();
  }
}

let iterator = new TestIterator().filter(() => true);
iterator.next();

assert.throws(Test262Error, function () {
  iterator.return();
});
