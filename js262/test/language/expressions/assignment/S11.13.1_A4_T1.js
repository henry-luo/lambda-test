

/*---
info: "AssignmentExpression : LeftHandSideExpression = AssignmentExpression"
es5id: 11.13.1_A4_T1
description: Syntax check
---*/


var x;
x = x = 1;
if (x !== 1) {
  throw new Test262Error('#1: The expression x = x = 1 is the same x = (x = 1), not (x = x) = 1. Actual: ' + (x));
}
