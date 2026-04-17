

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var arguments = 42;
assert.sameValue(delete arguments, false, "arguments defined as global variable");
