

/*---
es6id: 13.1
description: >
    let declarations without initialisers in statement positions:
    if ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
if (true) let x;
