

/*---
description: |
  RegExp.prototype.exec doesn't get the lastIndex and ToInteger() it for non-global regular expressions when it should
info: bugzilla.mozilla.org/show_bug.cgi?id=646490
esid: pending
---*/


var re = /./, called = 0;
re.lastIndex = {valueOf: function() { called++; return 0; }};
re.exec(".");
re.lastIndex = {toString: function() { called++; return "0"; }};
re.exec(".");
re.lastIndex = {
  valueOf: function() { called++; return 0; },
  toString: function() { called--; }
};
re.exec(".");
assert.sameValue(called, 3, "FAIL, got " + called);
