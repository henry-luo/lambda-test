

/*---
es5id: 10.5-1gs
description: Strict Mode - arguments cannot be assigned to in a strict function
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();


function f_10_5_1_gs(){
    arguments = 7;
}
