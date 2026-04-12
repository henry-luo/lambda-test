

/*---
info: Check Postfix Increment Operator for automatic semicolon insertion
es5id: 7.9_A5.1_T1
description: Try use Variable \n ++ construction
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var x = 0;
x
++;
