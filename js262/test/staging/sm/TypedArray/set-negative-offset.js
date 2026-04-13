

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-TypedArray-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var gTestfile = "set-negative-offset.js";

var BUGNUMBER = 1140752;
var summary =
  "%TypedArray%.prototype.set must throw a RangeError when passed a negative " +
  "offset";

print(BUGNUMBER + ": " + summary);


try
{
  new Uint8Array().set([], -1);
  throw new Error("didn't throw at all");
}
catch (e)
{
  assert.sameValue(e instanceof RangeError, true,
           "expected RangeError, instead got: " + e);
}


print("Tests complete");
