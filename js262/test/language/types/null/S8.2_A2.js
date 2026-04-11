

/*---
info: The null is resrved word
es5id: 8.2_A2
description: Checking if execution of "var null" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var null;
