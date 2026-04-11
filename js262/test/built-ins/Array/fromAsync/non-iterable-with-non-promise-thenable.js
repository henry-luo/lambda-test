

/*---
esid: sec-array.fromasync
description: Non iterable input with non-promise thenables works.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expectedValue = {};
  const expected = [ expectedValue ];
  const inputThenable = {
    then (resolve, reject) {
      resolve(expectedValue);
    },
  };
  const input = {
    length: 1,
    0: inputThenable,
  };
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
});
