

/*---
es6id: 13.1
description: >
    let declarations with initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
do let x = 1; while (false)
