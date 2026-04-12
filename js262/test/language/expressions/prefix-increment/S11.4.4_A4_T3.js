

/*---
info: Operator ++x returns ToNumber(x) + 1
es5id: 11.4.4_A4_T3
description: Type(x) is string primitive or String object
---*/


var x = "1";
if (++x !== 1 + 1) {
  throw new Test262Error('#1: var x = "1"; ++x === 1 + 1. Actual: ' + (++x));
}


var x = "x"; 
if (isNaN(++x) !== true) {
  throw new Test262Error('#2: var x = "x"; ++x === Not-a-Number. Actual: ' + (++x));
}


var x = new String("-1");
if (++x !== -1 + 1) {
  throw new Test262Error('#3: var x = new String("-1"); ++x === -1 + 1. Actual: ' + (++x));
}
