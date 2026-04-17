

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var a = {b: null};

class C extends a?.b {}

assert.sameValue(Object.getPrototypeOf(C.prototype), null);

