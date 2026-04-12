

/*---
description: >
    `Promise.try` invoked on a constructor value that throws an error
features: [promise-try]
---*/

var CustomPromise = function () {
  throw new Test262Error();
};

assert.throws(Test262Error, function () {
  Promise.try.call(CustomPromise, function () {});
});
