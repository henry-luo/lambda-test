

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Errors thrown from the async function body reject the returned promise
flags: [async]
---*/

async function foo() {
  await Promise.resolve();
  throw 1;
}

foo().then(function () {
  $DONE("Should not be called");
}, function (e) {
  assert.sameValue(e, 1);
  $DONE();
});

