

/*---
includes: [sm/non262.js, sm/non262-shell.js, compareArray.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/

var array = ["not-a-number", "also-not-a-number"];
var copy = [...array];


array.sort(function(a, b) { return a - b; });

assert.compareArray(array, copy);

