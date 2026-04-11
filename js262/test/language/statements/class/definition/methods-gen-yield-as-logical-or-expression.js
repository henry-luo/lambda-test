

/*---
description: >
    `yield` expressions are not LogicalOrExpressions.
features: [generators]
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {
  *g() {
    yield ? yield : yield;
  }
}
