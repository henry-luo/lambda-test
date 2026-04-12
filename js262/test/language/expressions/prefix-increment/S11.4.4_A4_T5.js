

/*---
info: Operator ++x returns ToNumber(x) + 1
es5id: 11.4.4_A4_T5
description: Type(x) is Object object or Function object
---*/


var x = {}; 
if (isNaN(++x) !== true) {
  throw new Test262Error('#1: var x = {}; ++x === Not-a-Number. Actual: ' + (++x));
}


var x = function(){return 1}; 
if (isNaN(++x) !== true) {
  throw new Test262Error('#2: var x = function(){return 1}; ++x === Not-a-Number. Actual: ' + (++x));
}
