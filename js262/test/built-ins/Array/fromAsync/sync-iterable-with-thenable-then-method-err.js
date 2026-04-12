

/*---
esid: sec-array.fromasync
description: Result promise rejects if then method of input fails. 
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expectedValue = {};
  const expected = [ expectedValue ];
  const inputThenable = {
    then (resolve, reject) {
      throw new Test262Error();
    },
  };
  const input = [ inputThenable ].values();
  const output = Array.fromAsync(input);
  await assert.throwsAsync(Test262Error, () => output);
});
