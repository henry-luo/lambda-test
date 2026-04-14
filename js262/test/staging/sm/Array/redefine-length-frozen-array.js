

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 866580;
var summary = "Assertion redefining length property of a frozen array";

print(BUGNUMBER + ": " + summary);


var arr = Object.freeze([]);
Object.defineProperty(arr, "length", {});


print("Tests complete");
