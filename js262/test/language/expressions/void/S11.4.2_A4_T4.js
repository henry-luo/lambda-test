

/*---
info: Operator "void" evaluates UnaryExpression and returns undefined
es5id: 11.4.2_A4_T4
description: Type(x) is undefined or null
---*/


var x; 
if (isNaN(void x) !== true) {
  throw new Test262Error('#1: var x; void x === undefined. Actual: ' + (void x));
}


var x = null;
if (void x !== undefined) {
  throw new Test262Error('#2: var x = null; void x === undefined. Actual: ' + (void x));
}
