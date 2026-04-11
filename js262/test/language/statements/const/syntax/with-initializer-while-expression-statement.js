

/*---
es6id: 13.1
description: >
    const declarations with initialisers in statement positions:
    while ( Expression ) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
while (false) const x = 1;
