

/*---
es6id: 13.1
description: >
    let declarations with initialisers in statement positions:
    if ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
if (true) let x = 1;
