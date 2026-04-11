

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: Async function declaration returns a promise
flags: [async]
---*/

async function foo () {  }

foo().then(function() {
  $DONE();
})
