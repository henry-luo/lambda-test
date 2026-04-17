

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-RegExp-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1274393;
var summary = "RegExp constructor should check the pattern syntax again when adding unicode flag.";

print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => RegExp(/\-/, "u"), SyntaxError);

