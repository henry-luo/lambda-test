

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is allowed as an identifier in functions nested in async functions
---*/

var await;
async function foo() {
  function bar() {
    await = 1;
  }
  bar();
}
foo();

assert.sameValue(await, 1);
