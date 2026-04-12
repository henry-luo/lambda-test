

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator has throwing return
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
class IteratorThrows extends Iterator {
  next() {
    return {
      done: false,
      value: 0,
    };
  }
  return() {
    throw new Test262Error();
  }
}

let iterator = new IteratorThrows().flatMap(() => []);

assert.throws(Test262Error, function () {
  iterator.return();
});
