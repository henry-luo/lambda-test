

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator is closed before calling flatMap
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {
  for (let i = 0; i < 5; ++i) {
    yield i;
  }
})();

iterator.return();

let mapped = iterator.flatMap(() => []);

let { value, done } = mapped.next();

assert.sameValue(value, undefined);
assert.sameValue(done, true);
