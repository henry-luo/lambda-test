

/*---
info: Operator x @= y returns x @ y
es5id: 11.13.2_A3.2_T10
description: Checking Expression and Variable statements for x ^= y
---*/


var x = 0;
var x1 = (x ^= 1);
if (x1 !== 1) {
  throw new Test262Error('#1: var x = 0; var x1 = (x ^= 1); x1 === 1. Actual: ' + (x1));
}


var y;
var y1;
y = 1;
y1 = (y ^= 0);
if (y1 !== 1) {
  throw new Test262Error('#2: y = 1; y1 = (y ^= 0); y1 === 1. Actual: ' + (y1));
}
