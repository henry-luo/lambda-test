

/*---
esid: sec-iteratorprototype.find
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  %Iterator.prototype%.find ( predicate )

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

let iterator = new ThrowingIterator();

assert.throws(Test262Error, function () {
  iterator.find(() => {});
});
