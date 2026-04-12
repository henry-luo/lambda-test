

/*---
description: Test if disposed methods are called correctly in for statements.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  let forStatementValues = [];

  for (let i = 0; i < 3; i++) {
    await using x = {
      value: i,
      [Symbol.asyncDispose]() {
        forStatementValues.push(this.value);
      }
    };
  }
  forStatementValues.push(3);

  assert.compareArray(forStatementValues, [0, 1, 2, 3]);
});
