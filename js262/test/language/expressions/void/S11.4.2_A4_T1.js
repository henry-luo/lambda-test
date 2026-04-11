

/*---
info: Operator "void" evaluates UnaryExpression and returns undefined
es5id: 11.4.2_A4_T1
description: Type(x) is boolean primitive or Boolean object
---*/


var x = false; 
if (void x !== undefined) {
  throw new Test262Error('#1: var x = false; void x === undefined. Actual: ' + (void x));
}


var x = new Boolean(true);
if (void x !== undefined) {
  throw new Test262Error('#2: var x = new Boolean(true); void x === undefined. Actual: ' + (void x));
}
