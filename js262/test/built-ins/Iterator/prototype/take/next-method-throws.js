

/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator has throwing next method
info: |
  %Iterator.prototype%.take ( limit )

  8.b.iii. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    throw new Test262Error();
  }
}

let iterator = new ThrowingIterator().take(0);

iterator.next();

iterator = new ThrowingIterator().take(1);

assert.throws(Test262Error, function () {
  iterator.next();
});
