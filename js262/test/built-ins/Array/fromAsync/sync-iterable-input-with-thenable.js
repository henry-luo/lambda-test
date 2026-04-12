

/*---
esid: sec-array.fromasync
description: Sync-iterable input with thenables is transferred to the output array.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expected = [ 0, 1, 2 ];
  const input = [  0, Promise.resolve(1), Promise.resolve(2) ].values();
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
});
