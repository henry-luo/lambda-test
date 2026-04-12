

/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap returns an empty iterator when the iterator has already been exhausted
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

iterator = iterator.flatMap(x => [x]);
({ value, done } = iterator.next());
assert.sameValue(value, undefined);
assert.sameValue(done, true);
