

/*---
description: Test if disposed methods are called correctly in a block.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  let blockValues = [];

  {
    await using x = {
      value: 1,
      [Symbol.asyncDispose]() {
        blockValues.push(42);
      }
    };
    await using y = {
      value: 1,
      [Symbol.asyncDispose]() {
        blockValues.push(43);
      }
    };
    blockValues.push(44);
  }

  assert.compareArray(blockValues, [44, 43, 42]);
});
