

/*---
info: Operator x-- returns ToNumber(x)
es5id: 11.3.2_A4_T4
description: If Type(x) is undefined or null
---*/


var x; 
var y = x--;
if (isNaN(y) !== true) {
  throw new Test262Error('#1: var x; var y = x--; y === Not-a-Number. Actual: ' + (y));
}


var x = null;
var y = x--;
if (y !== 0) {
  throw new Test262Error('#2: var x = null; var y = x--; y === 0. Actual: ' + (y));
}
