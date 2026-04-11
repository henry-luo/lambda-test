

/*---
info: Appearing of continue without an IterationStatement leads to syntax error
es5id: 12.7_A1_T3
description: >
    Checking if laballed "continue" with no IterationStatement, placed
    into a block, fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

LABEL : x=3.14;


{
    var x=1;
    continue LABEL;
    var y=2;
}

