

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 886949;
var summary = "ES6 (draft May 2013) 15.7.3.10 Number.parseFloat(string)";

print(BUGNUMBER + ": " + summary);

assert.sameValue(Number.parseFloat("Infinity"), Infinity);
assert.sameValue(Number.parseFloat("+Infinity"), Infinity);
assert.sameValue(Number.parseFloat("-Infinity"), -Infinity);

assert.sameValue(Number.parseFloat("inf"), NaN);
assert.sameValue(Number.parseFloat("Inf"), NaN);
assert.sameValue(Number.parseFloat("infinity"), NaN);

assert.sameValue(Number.parseFloat("nan"), NaN);
assert.sameValue(Number.parseFloat("NaN"), NaN);


assert.sameValue(Number.parseFloat, parseFloat);

print("All tests passed!");
