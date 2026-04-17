

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-Date-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 771946;
var summary = "Fractional days, months, years shouldn't trigger asserts";

print(BUGNUMBER + ": " + summary);


new Date(0).setFullYear(1.5);
new Date(0).setUTCDate(1.5);
new Date(0).setMonth(1.5);


print("Tests complete");
