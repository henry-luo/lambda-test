

/*---
description: |
  RegExp constructor should check the pattern syntax again when adding unicode flag.
info: bugzilla.mozilla.org/show_bug.cgi?id=1274393
esid: pending
---*/

assert.throws(SyntaxError, () => RegExp(/\-/, "u"));
