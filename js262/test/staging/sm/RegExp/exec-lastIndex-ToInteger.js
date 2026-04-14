

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var BUGNUMBER = 646490;
var summary =
  "RegExp.prototype.exec doesn't get the lastIndex and ToInteger() it for " +
  "non-global regular expressions when it should";

print(BUGNUMBER + ": " + summary);


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


print("All tests passed!");
