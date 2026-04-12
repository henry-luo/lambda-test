

/*---
info: Check Do-While Statement for automatic semicolon insertion
es5id: 7.9_A9_T7
description: Execute do \n\n while(false)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


do

while (false)
