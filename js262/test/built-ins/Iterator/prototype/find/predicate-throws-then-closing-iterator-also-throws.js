

/*---
esid: sec-iteratorprototype.find
description: >
  Attempts to close iterator when predicate throws, but that throws
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
let returnCalls = 0;

class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1,
    };
  }
  return() {
    ++returnCalls;
    throw new Error();
  }
}

let iterator = new TestIterator();

assert.throws(Test262Error, function () {
  iterator.find(() => {
    throw new Test262Error();
  });
});

assert.sameValue(returnCalls, 1);
