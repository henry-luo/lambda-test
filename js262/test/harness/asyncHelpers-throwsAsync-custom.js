

/*---
description: |
    Thenables that reject with values of the specified constructor function
    satisfy the assertion.
flags: [async]
includes: [asyncHelpers.js]
---*/

function MyError() {}

asyncTest(async function () {
  const p = assert.throwsAsync(MyError, function () {
    return Promise.reject(new MyError());
  });
  assert(p instanceof Promise);
  await p;
});
