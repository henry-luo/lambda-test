

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.map ( mapper )

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    throw new Test262Error();
  }
}

let iterator = new ThrowingIterator().map(() => 0);

assert.throws(Test262Error, function () {
  iterator.next();
});
