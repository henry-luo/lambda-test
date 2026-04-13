

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-expressions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1184922;
var summary = "Array destructuring with accessing uninitialized lexical binding.";

print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => { let y = [y] = []; },
                       ReferenceError);
assertThrowsInstanceOf(() => { let y = [y] = [,]; },
                       ReferenceError);

