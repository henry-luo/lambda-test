

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

arguments = 42;
assert.sameValue(delete arguments, true, "arguments defined as global");

