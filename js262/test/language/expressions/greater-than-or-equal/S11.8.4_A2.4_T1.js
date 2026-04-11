

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.8.4_A2.4_T1
description: Checking with "="
---*/


var x = 1; 
if ((x = 0) >= x !== true) {
  throw new Test262Error('#1: var x = 1; (x = 0) >= x === true');
}


var x = 0; 
if (x >= (x = 1) !== false) {
  throw new Test262Error('#2: var x = 0; x >= (x = 1) === false');
}
