

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

var g = function*() { yield 3 + yield 4; };
