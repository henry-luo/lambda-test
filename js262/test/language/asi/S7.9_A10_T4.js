

/*---
info: Check {} for automatic semicolon insertion
es5id: 7.9_A10_T4
description: Checking if execution of "({};)*1" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


({};) * 1
