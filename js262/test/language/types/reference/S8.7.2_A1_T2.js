

/*---
info: GetValue(V) mast fail
es5id: 8.7.2_A1_T2
description: Checking if execution of "1=1" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

1=1;
