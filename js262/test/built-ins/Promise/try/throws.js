

/*---
description: Promise.try returns a Promise that rejects when the function throws
esid: sec-promise.try
features: [promise-try]
flags: [async]
includes: [asyncHelpers.js]
---*/

asyncTest(function () {
  return assert.throwsAsync(
    Test262Error,
    function () {
      return Promise.try(function () { throw new Test262Error(); })
    },
    "error thrown from callback must become a rejection"
  );
});
