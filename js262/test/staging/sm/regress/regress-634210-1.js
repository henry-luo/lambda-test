

/*---
description: |
  pending
esid: pending
---*/
function f() {}
f.p = function() {};
Object.freeze(f);
f.p;

