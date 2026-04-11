

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T2
description: Checking if execution of "return x" with no function fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x=1;
return x;
var y=2;

