

/*---
esid: sec-promise.allkeyed
description: >
  Promise.allKeyed invoked on a non-constructor value
info: |
  Promise.allKeyed ( promises )

  1. Let C be the this value.
  2. Let promiseCapability be ? NewPromiseCapability(C).

  NewPromiseCapability ( C )

  1. If IsConstructor(C) is false, throw a TypeError exception.
features: [await-dictionary]
---*/

assert.throws(TypeError, function() {
  Promise.allKeyed.call(eval);
});
