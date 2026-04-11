

/*---
esid: sec-array.fromasync
description: >
  Async-iterable input is transferred to the output array.
includes: [compareArray.js, asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  const expected = [ 0, 1, 2 ];

  async function* generateInput () {
    yield* expected;
  }

  const input = generateInput();
  const output = await Array.fromAsync(input);
  assert.compareArray(output, expected);
});
