

/*---
info: Appearing of continue without an IterationStatement leads to syntax error
es5id: 12.7_A1_T1
description: >
    Checking if execution of single "continue" without any
    IterationStatement fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


var x=1;
continue;
var y=2;

