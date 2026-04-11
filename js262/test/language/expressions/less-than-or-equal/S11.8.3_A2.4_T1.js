

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.3_A2.4_T1
description: Checking with "="
---*/


var x = 0; 
if ((x = 1) <= x !== true) {
  throw new Test262Error('#1: var x = 0; (x = 1) <= x === true');
}


var x = 1; 
if (x <= (x = 0) !== false) {
  throw new Test262Error('#2: var x = 1; x <= (x = 0) === false');
}
