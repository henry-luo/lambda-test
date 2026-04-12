

/*---
esid: sec-promise.allsettledkeyed
description: >
  Promise.allSettledKeyed invoked on a non-constructor value
info: |
  Promise.allSettledKeyed ( promises )

  1. Let C be the this value.
  2. Let promiseCapability be ? NewPromiseCapability(C).

  NewPromiseCapability ( C )

  1. If IsConstructor(C) is false, throw a TypeError exception.
features: [await-dictionary]
---*/

assert.throws(TypeError, function() {
  Promise.allSettledKeyed.call(eval);
});
