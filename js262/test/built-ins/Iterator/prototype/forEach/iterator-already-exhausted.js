

/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach returns immediately when the iterator has already been exhausted
info: |
  %Iterator.prototype%.forEach ( fn )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

let result = iterator.forEach(() => {
  throw new Error();
});
assert.sameValue(result, undefined);
