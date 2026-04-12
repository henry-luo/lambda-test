

/*---
esid: sec-iteratorprototype.find
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.find ( predicate )

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
  iterator.find(() => {});
});
