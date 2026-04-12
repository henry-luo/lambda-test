

/*---
es6id: 13.1
description: >
    const declarations with initialisers in statement positions:
    if ( Expression ) Statement else Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
if (true) {} else const x = 1;
