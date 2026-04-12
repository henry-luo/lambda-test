

/*---
esid: sec-array.fromasync
description: Sync-iterable input with non-promise thenables works.
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
  const input = [ inputThenable ].values();
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
});
