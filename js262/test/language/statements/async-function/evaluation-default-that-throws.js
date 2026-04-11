

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  If a default expression throws, the promise is rejected.
info: |
  This is different from generators which will throw the error out of the generator
  when it is called.
flags: [async]
---*/
var y = null;
async function foo(x = y()) {}
foo().then(function () {
  $DONE('promise should be rejected');
}, function () {
  $DONE();
});
