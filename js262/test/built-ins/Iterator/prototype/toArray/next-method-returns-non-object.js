

/*---
esid: sec-iteratorprototype.toArray
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.toArray ( )

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
  iterator.toArray();
});
