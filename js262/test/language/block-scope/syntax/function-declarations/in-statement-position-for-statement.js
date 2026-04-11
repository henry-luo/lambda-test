

/*---
es6id: 13.1
description: >
    function declarations in statement position:
    for ( ;;) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
for (;false;) function g() {}

