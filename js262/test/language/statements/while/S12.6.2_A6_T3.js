

/*---
info: Expression in "while" IterationStatement is bracketed with braces
es5id: 12.6.2_A6_T3
description: Checking if execution of "while true break" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


while true break;

