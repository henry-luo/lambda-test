

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: Async function declarations cannot have a line break after `async`
info: Reference error is thrown due to looking up async in strict mode
---*/
assert.throws(ReferenceError, function() {
  async
  function foo() {}
});
