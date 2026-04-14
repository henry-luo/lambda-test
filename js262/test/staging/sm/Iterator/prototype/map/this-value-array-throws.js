

/*---
esid: pending
description: |
  TypeError not thrown when `this` is an Array.
features:
  - Symbol.iterator
  - iterator-helpers
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
---*/


Iterator.prototype.map.call([], x => x);

