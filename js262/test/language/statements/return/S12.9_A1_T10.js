

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T10
description: Checking if execution of "return (0)" with no function fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


return (0);

