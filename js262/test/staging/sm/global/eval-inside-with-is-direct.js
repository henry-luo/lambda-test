

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 601307;
var summary = "with (...) eval(...) is a direct eval";

print(BUGNUMBER + ": " + summary);


var t = "global";
function test()
{
  var t = "local";
  with ({})
    return eval("t");
}
assert.sameValue(test(), "local");


print("All tests passed!");
