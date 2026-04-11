

/*---
description: |
  String.prototype.replace should do nothing if lastIndex is invalid for sticky RegExp
info: bugzilla.mozilla.org/show_bug.cgi?id=887016
esid: pending
---*/

var re = /a/y;
re.lastIndex = -1;
assert.sameValue("a".replace(re, "b"), "b");
re.lastIndex = 0;
assert.sameValue("a".replace(re, "b"), "b");
re.lastIndex = 1;
assert.sameValue("a".replace(re, "b"), "a");
re.lastIndex = 2;
assert.sameValue("a".replace(re, "b"), "a");
re.lastIndex = "foo";
assert.sameValue("a".replace(re, "b"), "b");
re.lastIndex = "1";
assert.sameValue("a".replace(re, "b"), "a");
re.lastIndex = {};
assert.sameValue("a".replace(re, "b"), "b");
