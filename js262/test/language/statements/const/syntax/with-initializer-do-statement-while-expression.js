

/*---
es6id: 13.1
description: >
    const declarations with initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
do const x = 1; while (false)
