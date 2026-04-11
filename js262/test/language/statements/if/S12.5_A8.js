

/*---
info: In the "if" Statement empty expression is not allowed
es5id: 12.5_A8
description: Checking if execution of "if()" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


if();

