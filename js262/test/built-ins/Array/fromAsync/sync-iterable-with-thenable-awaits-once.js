

/*---
esid: sec-array.fromasync
description: >
  Sync-iterable input with thenables awaits each input once without mapping callback
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expectedValue = {};
  let awaitCounter = 0;
  const inputThenable = {
    then (resolve, reject) {
      awaitCounter++;
      resolve(expectedValue);
    },
  };
  const input = [ inputThenable ].values();
  await Array.fromAsync(input);
  assert.sameValue(awaitCounter, 1);
});
