

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await in a generator is an identifier
features: [generators]
---*/

function* foo(await) { yield await; };
assert.sameValue(foo(1).next().value, 1);
