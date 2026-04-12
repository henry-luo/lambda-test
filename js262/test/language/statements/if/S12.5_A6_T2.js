

/*---
info: In the If statement expression must be enclosed in braces
es5id: 12.5_A6_T2
description: Checking if execution of "if false" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


if false;

