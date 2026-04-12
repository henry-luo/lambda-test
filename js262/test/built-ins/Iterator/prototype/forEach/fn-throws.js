

/*---
esid: sec-iteratorprototype.forEach
description: >
  Closes iterator and throws when fn throws
info: |
  %Iterator.prototype%.forEach ( fn )

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
  iterator.forEach(() => {
    ++callbackCalls;
    throw new Test262Error();
  });
});

assert.sameValue(callbackCalls, 1);
assert.sameValue(returnCalls, 1);
