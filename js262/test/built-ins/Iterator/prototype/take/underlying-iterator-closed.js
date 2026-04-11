

/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator is closed before calling take
info: |
  %Iterator.prototype%.take ( limit )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();

iterator.return();

let taken = iterator.take(2);

let { value, done } = taken.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
