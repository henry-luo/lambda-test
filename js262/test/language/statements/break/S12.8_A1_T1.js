

/*---
info: Appearing of break without an IterationStatement leads to syntax error
es5id: 12.8_A1_T1
description: Checking if break statement with no loop fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x=1;
break;
var y=2;

