

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.map ( mapper )

features: [iterator-helpers]
flags: []
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().map(() => 0);

assert.throws(TypeError, function () {
  iterator.next();
});
