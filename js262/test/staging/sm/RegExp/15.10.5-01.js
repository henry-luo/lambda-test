

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 614603;
var summary = "RegExp.length";

print(BUGNUMBER + ": " + summary);


assert.sameValue(RegExp.length, 2);
assert.sameValue(/a/.constructor.length, 2);

print("All tests passed!");
