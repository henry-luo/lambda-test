

/*---
esid: sec-array.fromasync
description: Result promise rejects if element access fails
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const input = {
    length: 1,
    get 0 () {
      throw new Test262Error;
    },
  };
  const outputPromise = Array.fromAsync(input);
  assert.throwsAsync(Test262Error, () => outputPromise);
});
