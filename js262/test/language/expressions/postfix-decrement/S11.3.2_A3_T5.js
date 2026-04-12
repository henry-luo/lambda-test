

/*---
info: Operator x-- returns x = ToNumber(x) - 1
es5id: 11.3.2_A3_T5
description: Type(x) is Object object or Function object
---*/


var x = {}; 
x--; 
if (isNaN(x) !== true) {
  throw new Test262Error('#1: var x = {}; x--; x === Not-a-Number. Actual: ' + (x));
}


var x = function(){return 1}; 
x--; 
if (isNaN(x) !== true) {
  throw new Test262Error('#2: var x = function(){return 1}; x--; x === Not-a-Number. Actual: ' + (x));
}
