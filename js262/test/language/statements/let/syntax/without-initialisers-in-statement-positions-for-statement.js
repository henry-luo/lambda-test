

/*---
es6id: 13.1
description: >
    let declarations without initialisers in statement positions:
    for ( ;;) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
for (;false;) let x;
