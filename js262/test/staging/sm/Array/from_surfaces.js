

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var desc = Object.getOwnPropertyDescriptor(Array, "from");
assert.sameValue(desc.configurable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.writable, true);
assert.sameValue(Array.from.length, 1);
assertThrowsInstanceOf(() => new Array.from(), TypeError);  

