

/*---
info: Check Function Expression for automatic semicolon insertion
es5id: 7.9_A5.5_T1
description: Try use 1 + function_name\n(2 + 3) construction
---*/


function f(t) {
  return t;
}
var x = 1 + f
(2 + 3)
if (x !== 6) {
  throw new Test262Error('#1: Check Function Expression for automatic semicolon insertion');
}
