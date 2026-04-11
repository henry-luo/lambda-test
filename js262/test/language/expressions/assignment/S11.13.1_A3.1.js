

/*---
info: Operator x = y PutValue(x, y)
es5id: 11.13.1_A3.1
description: Checking Expression and Variable statements
---*/


var x = 1;
if (x !== 1) {
  throw new Test262Error('#1: var x = 1; x === 1. Actual: ' + (x));
}


x = 1;
if (x !== 1) {
  throw new Test262Error('#2: x = 1; x === 1. Actual: ' + (x));
}
