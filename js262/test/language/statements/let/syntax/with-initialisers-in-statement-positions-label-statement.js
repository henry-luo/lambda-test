

/*---
es6id: 13.1
description: >
    let declarations with initialisers in statement positions:
    label: Statement
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
label: let x = 1;
