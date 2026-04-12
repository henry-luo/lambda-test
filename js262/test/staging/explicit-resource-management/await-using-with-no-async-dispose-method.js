

/*---
description: Test if exception is throwon when dispose method is missing.
includes: [asyncHelpers.js]
flags: [async]
features: [explicit-resource-management]
---*/


asyncTest(async function() {
  let values = [];

  async function TestUsingWithoutDisposeMethod() {
      await using x = {value: 1};
      values.push(43);
  };
  await assert.throwsAsync(
      TypeError, () => TestUsingWithoutDisposeMethod(), 'No dispose method');
});
