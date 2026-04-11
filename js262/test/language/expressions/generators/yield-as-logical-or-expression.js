

/*---
description: >
    `yield` expressions are not LogicalOrExpressions.
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();


var g = function*() {
  yield ? yield : yield;
};
