

/*---
info: The false is reserved word
es5id: 8.3_A2.2
description: Checking if execution of "false=0" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

false = 0;
