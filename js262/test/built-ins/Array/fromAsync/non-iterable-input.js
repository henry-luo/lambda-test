

/*---
esid: sec-array.fromasync
description: >
  Non iterable input without thenables is transferred to the output array.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expected = [ 0, 1, 2 ];
  const input = {
    length: 3,
    0: 0,
    1: 1,
    2: 2,
    3: 3, 
  };
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
});
