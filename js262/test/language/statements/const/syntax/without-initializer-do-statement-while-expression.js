

/*---
es6id: 13.1
description: >
    const declarations without initialisers in statement positions:
    do Statement while ( Expression )
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
do const x; while (false)
