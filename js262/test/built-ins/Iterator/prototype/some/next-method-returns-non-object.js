

/*---
esid: sec-iteratorprototype.some
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.some ( predicate )

features: [iterator-helpers]
flags: []
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator();

assert.throws(TypeError, function () {
  iterator.some(() => {});
});
