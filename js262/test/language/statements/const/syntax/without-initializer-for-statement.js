

/*---
es6id: 13.1
description: >
    const declarations without initialisers in statement positions:
    for ( ;;) Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
for (;false;) const x;
