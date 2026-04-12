

/*---
description: >
  Promise.any invoked on a non-constructor value
esid: sec-promise.any
info: |
  ...
  2. Let promiseCapability be ? NewPromiseCapability(C).

  NewPromiseCapability ( C )

  1. If IsConstructor(C) is false, throw a TypeError exception.

features: [Promise.any, Symbol]
---*/

assert.sameValue(typeof Promise.any, 'function');

assert.throws(TypeError, function() {
  Promise.any.call(eval);
});
