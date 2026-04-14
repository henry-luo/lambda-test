

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  pending
esid: pending
---*/


let g = function () { "use strict"; assert.sameValue(this, undefined); }
function f() { "use strict"; assert.sameValue(this, undefined); }

with ({}) { 
  
  f();
  
  g();
}

f();
g();

