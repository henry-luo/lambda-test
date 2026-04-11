

/*---
info: The true is reserved word
es5id: 8.3_A2.1
description: Checking if execution of "true=1" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

true = 1;
