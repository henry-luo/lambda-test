

/*---
description: |
  Array destructuring with accessing uninitialized lexical binding.
info: bugzilla.mozilla.org/show_bug.cgi?id=1184922
esid: pending
---*/

assert.throws(ReferenceError, () => { let y = [y] = []; });
assert.throws(ReferenceError, () => { let y = [y] = [,]; });
