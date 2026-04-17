

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-object-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
var gTestfile = 'vacuous-accessor-unqualified-name.js';

var BUGNUMBER = 560216;
var summary =
  "Using a name referring to a { get: undefined, set: undefined } descriptor " +
  "shouldn't assert";

print(BUGNUMBER + ": " + summary);


Object.defineProperty(this, "x", { set: undefined, configurable: true });
x;


print("All tests passed!");
