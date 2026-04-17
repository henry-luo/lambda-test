

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/
function f() {}
f.p = function() {};
Object.freeze(f);
f.p;

