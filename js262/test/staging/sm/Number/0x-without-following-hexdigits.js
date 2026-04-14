

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 582643;
var summary = "'0x' not followed by hex digits should be a syntax error";

print(BUGNUMBER + ": " + summary);


try
{
  eval("0x");
  throw new Error("didn't throw parsing 0x (with no subsequent hex digits)");
}
catch (e)
{
  assert.sameValue(e instanceof SyntaxError, true,
           "bad exception thrown: " + e);
}


print("All tests passed!");
