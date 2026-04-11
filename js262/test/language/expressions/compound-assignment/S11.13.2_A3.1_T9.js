

/*---
info: Operator x @= y uses PutValue(x, x @ y)
es5id: 11.13.2_A3.1_T9
description: Checking Expression and Variable statements for x &= y
---*/


var x = 1;
x &= 1; 
if (x !== 1) {
  throw new Test262Error('#1: var x = 1; x &= 1; x === 1. Actual: ' + (x));
}


var y;
y = 1;
y &= 1;
if (y !== 1) {
  throw new Test262Error('#2: y = 1; y &= 1; y === 1. Actual: ' + (y));
}
