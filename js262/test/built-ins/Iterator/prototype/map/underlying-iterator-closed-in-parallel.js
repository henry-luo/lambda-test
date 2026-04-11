

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator is closed after calling map
info: |
  %Iterator.prototype%.map ( mapper )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();

let mapped = iterator.map(() => 0);

iterator.return();

let { value, done } = mapped.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
