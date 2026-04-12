

/*---
esid: sec-iteratorprototype.find
description: >
  Closes iterator and throws when predicate throws
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
    return {};
  }
}

let iterator = new TestIterator();

let callbackCalls = 0;

assert.throws(Test262Error, function () {
  iterator.find(() => {
    ++callbackCalls;
    throw new Test262Error();
  });
});

assert.sameValue(callbackCalls, 1);
assert.sameValue(returnCalls, 1);
