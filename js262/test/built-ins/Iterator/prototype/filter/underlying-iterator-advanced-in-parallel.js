

/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator is advanced after calling filter
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

let { value, done } = iterator.next();

assert.sameValue(value, 0);
assert.sameValue(done, false);

iterator.next();
iterator.next();

({ value, done } = filtered.next());

assert.sameValue(value, 3);
assert.sameValue(done, false);

({ value, done } = filtered.next());

assert.sameValue(value, 4);
assert.sameValue(done, false);

({ value, done } = filtered.next());

assert.sameValue(value, undefined);
assert.sameValue(done, true);
