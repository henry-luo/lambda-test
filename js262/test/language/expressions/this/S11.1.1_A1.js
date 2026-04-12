

/*---
info: The "this" is reserved word
es5id: 11.1.1_A1
description: Checking if execution of "this=1" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

this = 1;
