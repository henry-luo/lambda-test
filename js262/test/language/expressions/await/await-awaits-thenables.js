

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await can await any thenable.
flags: [async]
includes: [asyncHelpers.js]
---*/

var thenable = {
  then: function (resolve, reject) {
    resolve(42);
  }
}
async function foo() {
  assert.sameValue(await thenable, 42);
}

asyncTest(foo);
