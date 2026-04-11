

/*---
description: |
  await outside of async function should provide better error
info: bugzilla.mozilla.org/show_bug.cgi?id=1317153
esid: pending
---*/

assert.throws(SyntaxError, function() {
  eval("await 10");
});
