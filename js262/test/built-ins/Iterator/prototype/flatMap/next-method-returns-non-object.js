

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().flatMap(x => [x]);

assert.throws(TypeError, function () {
  iterator.next();
});
