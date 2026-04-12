

/*---
info: Operator "void" evaluates UnaryExpression and returns undefined
es5id: 11.4.2_A4_T2
description: Type(x) is number primitive or Number object
---*/


var x = 0.1;
if (void x !== undefined) {
  throw new Test262Error('#1: var x = 0.1; void x === undefined. Actual: ' + (void x));
}


var x = new Number(-1.1);
if (void x !== undefined) {
  throw new Test262Error('#2: var x = new Number(-1.1); void x === undefined. Actual: ' + (void x));
}
