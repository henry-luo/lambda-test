

/*---
description: >
    `yield` is a reserved keyword within generator function bodies and may
    not be used as the binding identifier of a parameter.
features: [generators]
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var obj = {
  *g(yield) {}
};
