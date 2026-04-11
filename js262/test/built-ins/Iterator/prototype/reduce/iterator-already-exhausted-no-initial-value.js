

/*---
esid: sec-iteratorprototype.reduce
description: >
  Iterator.prototype.reduce without an initial value throws when the iterator has already been exhausted
info: |
  %Iterator.prototype%.reduce ( reducer )

features: [iterator-helpers]
flags: []
---*/
let iterator = (function* () {})();

let { value, done } = iterator.next();
assert.sameValue(value, undefined);
assert.sameValue(done, true);

assert.throws(TypeError, function() {
  iterator.reduce(() => {});
});

iterator.reduce(() => {}, 0);
