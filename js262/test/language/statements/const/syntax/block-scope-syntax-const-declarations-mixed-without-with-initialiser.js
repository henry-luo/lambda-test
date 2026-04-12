

/*---
es6id: 13.1
description: >
    const declarations mixed: without, with initialiser
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
const x, y = 1;

