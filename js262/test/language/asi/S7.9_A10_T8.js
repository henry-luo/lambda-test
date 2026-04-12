

/*---
info: Check {} for automatic semicolon insertion
es5id: 7.9_A10_T8
description: Checking if execution of "{1 2} 3" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


{1 2} 3
