

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator is closed when argument validation fails
info: |
  %Iterator.prototype%.flatMap ( mapper )

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
  closable.flatMap();
});
assert.sameValue(closed, true);

closed = false;
assert.throws(TypeError, function() {
  closable.flatMap({});
});
assert.sameValue(closed, true);
