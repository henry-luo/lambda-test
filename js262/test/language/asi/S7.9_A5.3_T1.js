

/*---
info: Check Postfix Decrement Operator for automatic semicolon insertion
es5id: 7.9_A5.3_T1
description: Try use Variable \n -- construction
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x = 1;
x
--;
