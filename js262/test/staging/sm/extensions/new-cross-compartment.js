

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 1178653;
var summary =
  "|new| on a cross-compartment wrapper to a non-constructor shouldn't assert";

print(BUGNUMBER + ": " + summary);


var g = createNewGlobal();

var otherStr = new g.String("foo");
assert.sameValue(otherStr instanceof g.String, true);
assert.sameValue(otherStr.valueOf(), "foo");

try
{
  var constructor = g.parseInt;
  new constructor();
  throw new Error("no error thrown");
}
catch (e)
{
  
  
  assert.sameValue(e instanceof TypeError, true);
}


print("Tests complete");
