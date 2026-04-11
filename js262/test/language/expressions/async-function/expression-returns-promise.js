

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async function expressions return promises
---*/

var p = async function() { }();
assert(p instanceof Promise, "async functions return promise instances");
