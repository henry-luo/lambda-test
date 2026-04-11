

/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find expects to be called with a callable argument.
info: |
  %Iterator.prototype%.find ( predicate )

features: [iterator-helpers]
flags: []
---*/
let nonCallable = {};
let iterator = (function* () {
  yield 1;
})();

assert.throws(TypeError, function () {
  iterator.find(nonCallable);
});
