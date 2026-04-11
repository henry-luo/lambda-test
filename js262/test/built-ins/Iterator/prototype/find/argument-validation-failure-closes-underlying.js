

/*---
esid: sec-iteratorprototype.find
description: >
  Underlying iterator is closed when argument validation fails
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/

let closed = false;
let closable = {
  __proto__: Iterator.prototype,
  get next() {
    throw new Test262Error('next should not be read');
  },
  return() {
    closed = true;
    return {};
  },
};

assert.throws(TypeError, function() {
  closable.find();
});
assert.sameValue(closed, true);

closed = false;
assert.throws(TypeError, function() {
  closable.find({});
});
assert.sameValue(closed, true);
