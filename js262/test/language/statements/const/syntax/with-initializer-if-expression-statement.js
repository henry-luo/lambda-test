

/*---
es6id: 13.1
description: >
    const declarations with initialisers in statement positions:
    if ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
if (true) const x = 1;
