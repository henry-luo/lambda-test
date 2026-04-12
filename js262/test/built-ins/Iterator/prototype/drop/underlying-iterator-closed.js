

/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator is closed before calling drop
info: |
  %Iterator.prototype%.drop ( limit )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();

iterator.return();

let dropped = iterator.drop(2);

let { value, done } = dropped.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
