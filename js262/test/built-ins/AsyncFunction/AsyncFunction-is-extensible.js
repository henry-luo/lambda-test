

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  %AsyncFunction% is extensible
---*/

var AsyncFunction = async function() {}.constructor;
AsyncFunction.x = 1;
assert.sameValue(AsyncFunction.x, 1);
