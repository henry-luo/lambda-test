

/*---
es6id: 13.1
description: >
    const declarations without initialisers in statement positions:
    default : StatementList
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
switch (true) { default: const x; }
