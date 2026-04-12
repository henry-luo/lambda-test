

/*---
description: >
    `yield` expressions bind weakly
es6id: 14.4
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

function* g() { yield 3 + yield 4; }
