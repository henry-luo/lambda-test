

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is allowed as a binding identifier in global scope
---*/

async function await() { return 1 }
assert(await instanceof Function);

