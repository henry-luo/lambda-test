

/*---
info: Only AssignmentExpression is admitted when variable is initialized
es5id: 12.2_A8_T6
description: Checking if execution of "var x*1" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x*1;

