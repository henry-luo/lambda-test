

/*---
es6id: 13.1
description: >
    function declarations in statement position:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
do function g() {} while (false)

