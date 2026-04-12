

/*---
esid: sec-iteratorprototype.forEach
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.forEach ( fn )

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
  iterator.forEach(() => {});
});
