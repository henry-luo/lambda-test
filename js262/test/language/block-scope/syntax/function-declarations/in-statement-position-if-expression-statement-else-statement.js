

/*---
es6id: 13.1
description: >
    function declarations in statement position in strict mode:
    if ( Expression ) Statement else Statement
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();
if (true) {} else function g() {}

