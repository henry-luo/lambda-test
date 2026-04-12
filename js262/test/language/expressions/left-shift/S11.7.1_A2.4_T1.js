

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.7.1_A2.4_T1
description: Checking with "="
---*/


var x = 0; 
if ((x = 1) << x !== 2) {
  throw new Test262Error('#1: var x = 0; (x = 1) << x === 2. Actual: ' + ((x = 1) << x));
}


var x = 0; 
if (x << (x = 1) !== 0) {
  throw new Test262Error('#2: var x = 0; x << (x = 1) === 0. Actual: ' + (x << (x = 1)));
}
