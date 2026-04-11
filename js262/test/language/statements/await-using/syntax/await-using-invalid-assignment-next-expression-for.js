

/*---
esid: sec-declarative-environment-records-setmutablebinding-n-v-s
description: >
    await using: invalid assignment in next expression. Since an `await using` declaration introduces an immutable
    binding, any attempt to change it results in a TypeError.
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/

asyncTest(async function () {
  await assert.throwsAsync(TypeError, async function() {
    for (await using i = null; i === null; i = { [Symbol.dispose]() { } }) {}
  });
});
