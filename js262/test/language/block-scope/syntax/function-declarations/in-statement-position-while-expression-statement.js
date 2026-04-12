

/*---
es6id: 13.1
description: >
    function declarations in statement position:
    while ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
while (false) function g() {}

