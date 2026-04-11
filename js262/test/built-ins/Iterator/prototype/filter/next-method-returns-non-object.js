

/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator next returns non-object
info: |
  %Iterator.prototype%.filter ( predicate )

  3.b.i. Let next be ? IteratorStep(iterated).

features: [iterator-helpers]
flags: []
---*/
class NonObjectIterator extends Iterator {
  next() {
    return null;
  }
}

let iterator = new NonObjectIterator().filter(() => true);

assert.throws(TypeError, function () {
  iterator.next();
});
