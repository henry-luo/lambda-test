

/*---
esid: sec-promise.allsettled
description: Promise.allSettled([]) returns a Promise for an empty array
info: |
  Runtime Semantics: PerformPromiseAllSettled ( iteratorRecord, constructor, resultCapability )

  4. Let remainingElementsCount be a new Record { [[Value]]: 1 }.
  ...
  6.d ...
    ii. Set remainingElementsCount.[[value]] to remainingElementsCount.[[value]] − 1.
    iii. If remainingElementsCount.[[value]] is 0, then
      1. Let valuesArray be CreateArrayFromList(values).
      2. Perform ? Call(resultCapability.[[Resolve]], undefined, « valuesArray »).
  ...
flags: [async]
includes: [promiseHelper.js]
features: [Promise.allSettled]
---*/

var arg = [];

Promise.allSettled(arg).then(function(result) {
  checkSettledPromises(result, []);
}).then($DONE, $DONE);
