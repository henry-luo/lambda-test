

/*---
esid: sec-declarative-environment-records-getbindingvalue-n-s
description: >
    await using: function local use before initialization in declaration statement.
    (TDZ, Temporal Dead Zone)
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/
asyncTest(async function () {
  await assert.throwsAsync(ReferenceError, async function() {
    await using x = x + 1;
  });
});
