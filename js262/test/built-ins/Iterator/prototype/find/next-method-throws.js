

/*---
esid: sec-iteratorprototype.find
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    throw new Test262Error();
  }
}

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  iterator.find(() => {});
});
