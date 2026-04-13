

/*---
esid: sec-iterator.concat
description: >
  Underlying iterator return is not called before initial call to next method
features: [iterator-sequencing]
---*/

let testIterator = {
  next() {
    return {
      done: false,
      value: 1,
    };
  },
  return() {
    throw new Test262Error();
  }
};

let iterable = {
  [Symbol.iterator]() {
    return testIterator;
  }
};

let iterator = Iterator.concat(iterable);
iterator.return();
iterator.next();
iterator.return();
