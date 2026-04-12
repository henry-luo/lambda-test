

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is allowed as an identifier in generator functions nested in async functions
features: [generators]
---*/

var await;
async function foo() {
  function* bar() {
    await = 1;
  }
  bar().next();
}
foo();

assert.sameValue(await, 1);
