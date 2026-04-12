

/*---
info: Operator ++x returns ToNumber(x) + 1
es5id: 11.4.4_A4_T4
description: Type(x) is undefined or null
---*/


var x; 
if (isNaN(++x) !== true) {
  throw new Test262Error('#1: var x; ++x === Not-a-Number. Actual: ' + (++x));
}


var x = null;
if (++x !== 1) {
  throw new Test262Error('#2: var x = null; ++x === 1. Actual: ' + (++x));
}
