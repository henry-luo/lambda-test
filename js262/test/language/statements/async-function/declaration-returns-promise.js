

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async functions return promises
---*/

async function foo() { };
var p = foo();
assert(p instanceof Promise, "async functions return promise instances");
