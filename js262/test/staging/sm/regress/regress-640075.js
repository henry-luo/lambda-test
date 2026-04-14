

/*---
flags:
  - onlyStrict
includes: [sm/non262.js, sm/non262-shell.js]
description: |
  pending
esid: pending
---*/
"use strict";
assertThrowsInstanceOf(
    () => eval("(function() { eval(); function eval() {} })"),
    SyntaxError
)

