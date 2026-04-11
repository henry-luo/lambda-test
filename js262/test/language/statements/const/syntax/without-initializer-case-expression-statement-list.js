

/*---
es6id: 13.1
description: >
    const declarations without initialisers in statement positions:
    case Expression : StatementList
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
switch (true) { case true: const x; }
