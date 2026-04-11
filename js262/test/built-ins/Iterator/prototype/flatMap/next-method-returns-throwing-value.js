

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: false,
      get value() {
        throw new Test262Error();
      },
    };
  }
  return() {
    throw new Error();
  }
}

let iterator = new ThrowingIterator().flatMap(x => [x]);

assert.throws(Test262Error, function () {
  iterator.next();
});
