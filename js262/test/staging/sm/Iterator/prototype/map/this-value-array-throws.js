

/*---
esid: pending
description: |
  TypeError not thrown when `this` is an Array.
features:
  - Symbol.iterator
  - iterator-helpers
---*/


Iterator.prototype.map.call([], x => x);

