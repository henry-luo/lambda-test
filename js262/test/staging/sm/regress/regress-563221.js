

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
"" + eval("(function () { if (x) ; else if (y) n(); else { " + Array(10000).join("e;") + " } });");

