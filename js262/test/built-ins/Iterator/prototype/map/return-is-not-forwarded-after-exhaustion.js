

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator return is not called after result iterator observes that underlying iterator is exhausted
info: |
  %Iterator.prototype%.map ( mapper )

features: [iterator-helpers]
flags: []
---*/
let returnCount = 0;

class TestIterator extends Iterator {
  next() {
    return {
      done: true,
      value: undefined,
    };
  }
  return() {
    throw new Test262Error();
  }
}

let iterator = new TestIterator().map(() => 0);
assert.throws(Test262Error, function () {
  iterator.return();
});
iterator.next();
iterator.return();

iterator = new TestIterator().map(() => 0);
iterator.next();
iterator.return();

iterator = new TestIterator()
  .map(x => x)
  .map(x => x)
  .map(x => x);
assert.throws(Test262Error, function () {
  iterator.return();
});
iterator.next();
iterator.return();
