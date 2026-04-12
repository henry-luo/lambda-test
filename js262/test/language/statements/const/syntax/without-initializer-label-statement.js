

/*---
es6id: 13.1
description: >
    const declarations without initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
label: const x;
