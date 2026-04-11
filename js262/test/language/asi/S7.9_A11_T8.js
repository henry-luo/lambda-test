

/*---
info: Check If Statement for automatic semicolon insertion
es5id: 7.9_A11_T8
description: Use if (false) {x = 1}; \n else x=-1 and check x
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if (false) {};
else {}
