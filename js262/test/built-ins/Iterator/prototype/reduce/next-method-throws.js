

/*---
esid: sec-iteratorprototype.reduce
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.reduce ( reducer )

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
  iterator.reduce(() => {});
});

assert.throws(Test262Error, function () {
  iterator.reduce(() => {}, 0);
});
