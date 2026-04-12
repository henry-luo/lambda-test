

/*---
info: First expression is evaluated first, and then second expression
es5id: 11.5.2_A2.4_T1
description: Checking with "="
---*/


var x = 0; 
if ((x = 1) / x !== 1) {
  throw new Test262Error('#1: var x = 0; (x = 1) / x === 1. Actual: ' + ((x = 1) / x));
}


var x = 0; 
if (x / (x = 1) !== 0) {
  throw new Test262Error('#2: var x = 0; x / (x = 1) === 0. Actual: ' + (x / (x = 1)));
}
