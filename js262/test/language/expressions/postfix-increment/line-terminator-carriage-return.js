

/*---
info: Line Terminator between LeftHandSideExpression and "++" is not allowed
es5id: 11.3.1_A1.1_T2
esid: postfix-increment-operator
description: Carriage Return
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x
++;

