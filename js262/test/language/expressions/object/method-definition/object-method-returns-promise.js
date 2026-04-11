

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async function method definitions return promises
features: [async-functions]
---*/
var obj = {
  async method() {}
}
var p = obj.method();
assert(p instanceof Promise, "async functions return promise instances");

