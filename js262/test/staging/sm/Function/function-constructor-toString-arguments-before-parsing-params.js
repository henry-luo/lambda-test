

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 920479;
var summary =
  "Convert all arguments passed to Function() to string before doing any " +
  "parsing of the to-be-created Function's parameters or body text";

print(BUGNUMBER + ": " + summary);


assertThrowsValue(() => Function("@", { toString() { throw 42; } }), 42);


print("Tests complete");
