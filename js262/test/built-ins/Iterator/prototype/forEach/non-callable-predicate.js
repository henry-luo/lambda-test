

/*---
esid: sec-iteratorprototype.forEach
description: >
  Iterator.prototype.forEach expects to be called with a callable argument.
info: |
  %Iterator.prototype%.forEach ( fn )

features: [iterator-helpers]
flags: []
---*/
let nonCallable = {};
let iterator = (function* () {
  yield 1;
})();

assert.throws(TypeError, function () {
  iterator.forEach(nonCallable);
});
