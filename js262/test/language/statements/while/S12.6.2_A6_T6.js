

/*---
info: Expression in "while" IterationStatement is bracketed with braces
es5id: 12.6.2_A6_T6
description: Checking if execution of "while 'hood' break" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


while 'hood' break;

