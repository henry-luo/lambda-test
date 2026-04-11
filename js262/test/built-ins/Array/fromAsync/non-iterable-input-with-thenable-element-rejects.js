

/*---
esid: sec-array.fromasync
description: Non-iterable input with thenable result promise rejects if thenable element rejects.
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expectedValue = {};
  const expected = [ expectedValue ];
  const inputThenable = {
    then (resolve, reject) {
      reject(new Test262Error);
    },
  };
  const input = {
    length: 1,
    0: inputThenable,
  };
  const output = Array.fromAsync(input);
  await assert.throwsAsync(Test262Error, () => output);
});
