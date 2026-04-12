

/*---
esid: sec-array.fromasync
description: Sync iterable result promise rejects if iteration of input fails.
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  function *generateInput () {
    throw new Test262Error;
  }
  const input = generateInput();
  const outputPromise = Array.fromAsync(input);
  await assert.throwsAsync(Test262Error, () => outputPromise);
});
