

/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.take ( limit )

  8.b.iii. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().take(0);

iterator.next();

iterator = new NonObjectIterator().take(1);

assert.throws(TypeError, function () {
  iterator.next();
});
