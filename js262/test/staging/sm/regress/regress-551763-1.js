

/*---
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

arguments = 42;
assert.sameValue(delete arguments, true, "arguments defined as global");

