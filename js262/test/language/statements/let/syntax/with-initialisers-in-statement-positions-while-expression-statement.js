

/*---
es6id: 13.1
description: >
    let declarations with initialisers in statement positions:
    while ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
while (false) let x = 1;
