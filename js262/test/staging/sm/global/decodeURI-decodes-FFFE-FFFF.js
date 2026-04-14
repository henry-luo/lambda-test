

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 520095;
var summary =
  "decodeURI{,Component} should return the specified character for " +
  "'%EF%BF%BE' and '%EF%BF%BF', not return U+FFFD";

print(BUGNUMBER + ": " + summary);


assert.sameValue(decodeURI("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURI("%EF%BF%BF"), "\uFFFF");
assert.sameValue(decodeURIComponent("%EF%BF%BE"), "\uFFFE");
assert.sameValue(decodeURIComponent("%EF%BF%BF"), "\uFFFF");


print("All tests passed!");
