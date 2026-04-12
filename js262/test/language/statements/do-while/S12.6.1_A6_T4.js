

/*---
info: Expression in "do-while" IterationStatement is bracketed with braces
es5id: 12.6.1_A6_T4
description: Checking if execution of "do{}while false" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


do break; while false;

