

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 866700;
var summary = "Assertion redefining non-writable length to a non-numeric value";

print(BUGNUMBER + ": " + summary);


var arr = [];
Object.defineProperty(arr, "length", { value: 0, writable: false });


Object.defineProperty(arr, "length", { value: '' });

assert.sameValue(arr.length, 0);


print("Tests complete");
