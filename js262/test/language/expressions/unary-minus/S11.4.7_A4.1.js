

/*---
info: If x is NaN, operator -x returns NaN
es5id: 11.4.7_A4.1
description: Checking NaN
---*/


if (isNaN(-NaN) !== true) {
  throw new Test262Error('#1: -NaN === Not-a-Number. Actual: ' + (-NaN));
}


var x = NaN; 
if (isNaN(-x) != true) {
  throw new Test262Error('#2: var x = NaN; -x === Not-a-Number. Actual: ' + (-x));
}
