

/*---
es6id: 13.1
description: >
    let declarations without initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
do let x; while (false)
