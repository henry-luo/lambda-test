

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is an identifier in global scope
---*/

var await = 1;
assert.sameValue(await, 1);
