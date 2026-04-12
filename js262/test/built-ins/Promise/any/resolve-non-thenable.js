

/*---
description: Resolving with a non-thenable object value
esid: sec-promise.any
info: |
  PerformPromiseAny

  Set remainingElementsCount.[[Value]] to remainingElementsCount.[[Value]] + 1.
  Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], rejectElement »).

flags: [async]
features: [Promise.any]
---*/

const a = {};
const b = {};
const c = {};

Promise.any([a, b, c])
  .then((value) => {
    assert.sameValue(value, a);
  }, () => {
    $DONE('The promise should not be rejected.');
  }).then($DONE, $DONE);
