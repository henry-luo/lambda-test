

/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some returns true when the iterator has already been exhausted
info: |
  %Iterator.prototype%.some ( predicate )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

let result = iterator.some(() => true);
assert.sameValue(result, false);

result = iterator.some(() => false);
assert.sameValue(result, false);
