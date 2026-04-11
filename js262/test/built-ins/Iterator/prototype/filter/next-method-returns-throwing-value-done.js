

/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator next returns object with throwing value getter, but is already done
info: |
  %Iterator.prototype%.filter ( predicate )

  3.b.ii. If next is false, return undefined.

features: [iterator-helpers]
flags: []
---*/
class ThrowingIterator extends Iterator {
  next() {
    return {
      done: true,
      get value() {
        throw new Test262Error();
      },
    };
  }
  return() {
    throw new Error();
  }
}

let iterator = new ThrowingIterator().filter(() => true);
iterator.next();
