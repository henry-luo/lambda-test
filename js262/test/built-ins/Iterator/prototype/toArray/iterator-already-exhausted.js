

/*---
esid: sec-iteratorprototype.toArray
description: >
  Iterator.prototype.toArray returns an empty array when the iterator has already been exhausted
info: |
  %Iterator.prototype%.toArray ( )

includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

let result = iterator.toArray();
assert.compareArray(result, []);

result = iterator.toArray();
assert.compareArray(result, []);
