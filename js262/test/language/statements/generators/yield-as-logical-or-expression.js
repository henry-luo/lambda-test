

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


function* g() {
  yield ? yield : yield
}
