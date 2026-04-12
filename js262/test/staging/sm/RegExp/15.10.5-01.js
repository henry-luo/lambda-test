

/*---
description: |
  RegExp.length
info: bugzilla.mozilla.org/show_bug.cgi?id=614603
esid: pending
---*/

assert.sameValue(RegExp.length, 2);
assert.sameValue(/a/.constructor.length, 2);
