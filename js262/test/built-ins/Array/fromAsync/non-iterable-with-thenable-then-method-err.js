

/*---
esid: sec-array.fromasync
description: Non-iterable input with thenable result promise is rejected if element's then method throws.
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const inputThenable = {
    then (resolve, reject) {
      throw new Test262Error;
    },
  };
  const input = {
    length: 1,
    0: inputThenable,
  };
  const outputPromise = Array.fromAsync(input);
  assert.throwsAsync(Test262Error, () => outputPromise);
});
