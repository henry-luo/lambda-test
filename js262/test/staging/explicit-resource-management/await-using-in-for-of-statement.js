

/*---
description: Test if disposed methods are called correctly in for-of statement.
includes: [asyncHelpers.js, compareArray.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  let forOfStatementValues = [];

  for (let i of [0, 1]) {
    await using x = {
      value: i,
      [Symbol.asyncDispose]() {
        forOfStatementValues.push(this.value);
      }
    };
  }
  forOfStatementValues.push(2);

  assert.compareArray(forOfStatementValues, [0, 1, 2]);
});
