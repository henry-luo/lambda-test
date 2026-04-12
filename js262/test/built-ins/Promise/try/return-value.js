

/*---
description: Promise.try returns a Promise resolved to the callback's return value
esid: sec-promise.try
features: [promise-try]
flags: [async]
includes: [asyncHelpers.js]
---*/

var sentinel = { sentinel: true };

asyncTest(function() {
  return Promise.try(function () {
    return sentinel;
  }).then(function (v) {
    assert.sameValue(v, sentinel);
  })
});

