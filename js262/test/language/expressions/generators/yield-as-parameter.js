

/*---
description: >
    `yield` is a reserved keyword within generator function bodies and may
    not be used as the binding identifier of a parameter.
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

var g = function*(yield) {};
