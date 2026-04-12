

/*---
esid: sec-asyncfromsynciteratorcontinuation
description: >
  Reject promise when PromiseResolve in AsyncFromSyncIteratorContinuation throws.
info: |
  25.1.4.4 AsyncFromSyncIteratorContinuation ( result, promiseCapability )
    ...
    5. Let valueWrapper be PromiseResolve(%Promise%, « value »).
    6. IfAbruptRejectPromise(valueWrapper, promiseCapability).
    ...

includes: [compareArray.js]
flags: [async]
features: [async-iteration]
---*/

var expected = [
  "start",

  
  "tick 1",

  
  "tick 2",

  
  "catch",
];

var actual = [];

async function f() {
  var p = Promise.resolve(0);
  Object.defineProperty(p, "constructor", {
    get() {
      throw new Error();
    }
  });
  actual.push("start");
  for await (var x of [p]);
  actual.push("never reached");
}

Promise.resolve(0)
  .then(() => actual.push("tick 1"))
  .then(() => actual.push("tick 2"))
  .then(() => {
    assert.compareArray(actual, expected);
}).then($DONE, $DONE);

f().catch(() => actual.push("catch"));
