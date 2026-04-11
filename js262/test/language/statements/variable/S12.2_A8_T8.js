

/*---
info: Only AssignmentExpression is admitted when variable is initialized
es5id: 12.2_A8_T8
description: Checking if execution of "var x in __arr" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

__arr = [];


var x in __arr;

