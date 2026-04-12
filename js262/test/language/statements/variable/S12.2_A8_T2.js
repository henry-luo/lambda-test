

/*---
info: Only AssignmentExpression is admitted when variable is initialized
es5id: 12.2_A8_T2
description: Checking if execution of "var x | true" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x | true;

