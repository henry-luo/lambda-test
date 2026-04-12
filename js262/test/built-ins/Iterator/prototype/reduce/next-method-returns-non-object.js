

/*---
esid: sec-iteratorprototype.reduce
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.reduce ( reducer )

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
  iterator.reduce(() => {});
});
