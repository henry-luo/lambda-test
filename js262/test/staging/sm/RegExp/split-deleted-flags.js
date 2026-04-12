

/*---
description: |
  RegExp.prototype.split should throw if RegRxp.prototype.flags is deleted.
info: bugzilla.mozilla.org/show_bug.cgi?id=1322319
esid: pending
---*/

delete RegExp.prototype.flags;

assert.throws(SyntaxError, () => "aaaaa".split(/a/));
