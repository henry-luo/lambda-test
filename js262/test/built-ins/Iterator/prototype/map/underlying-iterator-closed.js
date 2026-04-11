

/*---
esid: sec-iteratorprototype.map
description: >
  Underlying iterator is closed before calling map
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

iterator.return();

let mapped = iterator.map(() => 0);

let { value, done } = mapped.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
