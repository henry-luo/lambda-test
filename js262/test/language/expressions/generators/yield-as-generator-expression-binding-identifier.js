

/*---
description: >
    `yield` is not a valid BindingIdentifier for GeneratorExpressions.
es6id: 12.1.1
flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

var g = function* yield() {};
