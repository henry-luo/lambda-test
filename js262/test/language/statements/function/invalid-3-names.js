

/*---
es5id: 13.0-2
description: >
    13.0 - multiple names in one function declaration is not allowed,
    three function names
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function x,y,z(){}
