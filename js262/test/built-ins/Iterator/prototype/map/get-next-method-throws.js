

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator has throwing next getter
info: |
  %Iterator.prototype%.map ( mapper )

  4. Let iterated be ? GetIteratorDirect(O).

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  get next() {
    throw new Test262Error();
  }
}

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  iterator.map(() => 0);
});
