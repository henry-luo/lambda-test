

/*---
includes: [sm/non262.js, sm/non262-shell.js, sm/non262-extensions-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


function f(a,[x,y],b,[w,z],c) { function b() { } }

assert.sameValue(0, 0, "don't crash");
