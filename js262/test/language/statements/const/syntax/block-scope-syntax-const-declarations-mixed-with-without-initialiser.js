

/*---
es6id: 13.1
description: >
    const declarations mixed: with, without initialiser
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
const x = 1, y;

