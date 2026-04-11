

/*---
description: Rejecting through immediate invocation of the provided resolving function
esid: sec-promise.allsettled
info: |
  6. Let result be PerformPromiseAllSettled(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAllSettled
  
  6. Repeat
    ...
    z. Perform ? Invoke(nextPromise, "then", « resolveElement, rejectElement »).
flags: [async]
includes: [promiseHelper.js]
features: [Promise.allSettled]
---*/

var simulation = {};
var thenable = {
  then(_, reject) {
    reject(simulation);
  }
};

Promise.allSettled([thenable])
  .then((settleds) => {
    checkSettledPromises(settleds, [{ status: 'rejected', reason: simulation }]);
  }).then($DONE, $DONE);
