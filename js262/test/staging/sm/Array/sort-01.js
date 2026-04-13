

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var BUGNUMBER = 604971;
var summary = 'array.sort compare-function gets incorrect this';

print(BUGNUMBER + ": " + summary);


[1, 2, 3].sort(function() { "use strict"; assert.sameValue(this, undefined); });


print("All tests passed!");
