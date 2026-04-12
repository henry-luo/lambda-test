

/*---
info: Line Terminator between LeftHandSideExpression and "++" is not allowed
es5id: 11.3.1_A1.1_T1
esid: postfix-increment-operator
description: Checking Line Feed
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x
++;
