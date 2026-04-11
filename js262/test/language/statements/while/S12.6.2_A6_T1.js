

/*---
info: Expression in "while" IterationStatement is bracketed with braces
es5id: 12.6.2_A6_T1
description: Checking if execution of "while 1 break" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


while 1 break;

