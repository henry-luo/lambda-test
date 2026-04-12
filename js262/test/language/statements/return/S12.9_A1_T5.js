

/*---
info: Appearing of "return" without a function body leads to syntax error
es5id: 12.9_A1_T5
description: >
    Checking if execution of "return" with no function, placed into a
    Block, fails
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();


{
    var x=1;
    return;
    var y=2;
}

