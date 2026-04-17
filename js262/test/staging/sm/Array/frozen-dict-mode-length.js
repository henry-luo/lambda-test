

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


var BUGNUMBER = 1312948;
var summary = "Freezing a dictionary mode object with a length property should make Object.isFrozen report true";

print(BUGNUMBER + ": " + summary);


delete Array.prototype.slice;

Object.freeze(Array.prototype);
assert.sameValue(Object.isFrozen(Array.prototype), true);

