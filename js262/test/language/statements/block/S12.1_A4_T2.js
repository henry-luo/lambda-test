

/*---
info: The production Block can't be inside of expression
es5id: 12.1_A4_T2
description: Checking if execution of "y={x;}" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

x=1;


y={x;};

