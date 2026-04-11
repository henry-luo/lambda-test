

/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find returns undefined when the iterator has already been exhausted
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

let result = iterator.find(() => true);
assert.sameValue(result, undefined);

result = iterator.find(() => false);
assert.sameValue(result, undefined);
