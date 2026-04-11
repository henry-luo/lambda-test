

/*---
description: Test if exception handling is correct from Symbol.dispose.
includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  async function TestDisposeMethodThrows() {
    await using x = {
      value: 1,
      [Symbol.dispose]() {
        throw new Test262Error('Symbol.dispose is throwing!');
      }
    };
  }

  await assert.throwsAsync(
      Test262Error, () => TestDisposeMethodThrows(),
      'Symbol.dispose is throwing!');
});
