

/*---
info: GetValue(V) mast fail
es5id: 8.7.2_A1_T1
description: Checking if execution of "'litera'=1;" fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

'litera'=1;
