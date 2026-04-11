

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator next returns object with throwing value getter
info: |
  %Iterator.prototype%.map ( mapper )

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

let iterator = new ThrowingIterator().map(() => 0);

assert.throws(Test262Error, function () {
  iterator.next();
});
