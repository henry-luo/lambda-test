

/*---
info: Operator x++ returns x = ToNumber(x) + 1
es5id: 11.3.1_A3_T4
description: Type(x) is undefined or null
---*/


var x; 
x++; 
if (isNaN(x) !== true) {
  throw new Test262Error('#1: var x; x++; x === Not-a-Number. Actual: ' + (x));
}


var x = null; 
x++; 
if (x !== 1) {
  throw new Test262Error('#2: var x = null; x++; x === 1. Actual: ' + (x));
}
