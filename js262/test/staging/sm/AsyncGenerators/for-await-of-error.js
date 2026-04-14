

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var BUGNUMBER = 1391519;
var summary = "for-await-of outside of async function should provide better error";

print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOfWithMessageContains(
    () => eval("for await (let x of []) {}"),
    SyntaxError,
    "for await (... of ...) is only valid in"
);


assertThrowsInstanceOfWithMessageContains(
    () => eval("async function f() { for await await (let x of []) {} }"),
    SyntaxError,
    "missing ( after for"
);

