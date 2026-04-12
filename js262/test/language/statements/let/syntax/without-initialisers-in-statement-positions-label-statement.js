

/*---
es6id: 13.1
description: >
    let declarations without initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
label: let x;
