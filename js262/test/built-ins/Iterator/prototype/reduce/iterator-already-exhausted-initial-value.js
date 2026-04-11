

/*---
esid: sec-iteratorprototype.reduce
description: >
  Iterator.prototype.reduce returns the initial value when the iterator has already been exhausted
info: |
  %Iterator.prototype%.reduce ( reducer )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

const initialValue = {};
let result = iterator.reduce(() => {}, initialValue);
assert.sameValue(result, initialValue);
