

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async arrow functions return promises
flags: [async]
---*/

var p = (async () => await 1 + await 2)();
assert(Object.getPrototypeOf(p) === Promise.prototype);
p.then(function (v) {
  assert.sameValue(v, 3);
  $DONE();
}, $DONE);
