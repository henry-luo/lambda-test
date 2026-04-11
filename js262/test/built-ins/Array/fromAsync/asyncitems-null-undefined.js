

/*---
esid: sec-array.fromasync
description: >
  Array.fromAsync rejects with a TypeError if the asyncItems argument is null or undefined
info: |
  3.c. Let usingAsyncIterator be ? GetMethod(asyncItems, @@asyncIterator).
includes: [asyncHelpers.js]
flags: [async]
features: [Array.fromAsync]
---*/

asyncTest(async function () {
  await assert.throwsAsync(TypeError, () => Array.fromAsync(null), "null asyncItems");
  await assert.throwsAsync(TypeError, () => Array.fromAsync(undefined), "undefined asyncItems");
});
