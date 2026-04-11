

/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator is closed after calling filter
info: |
  %Iterator.prototype%.filter ( predicate )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();

let filtered = iterator.filter(() => true);

iterator.return();

let { value, done } = filtered.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
