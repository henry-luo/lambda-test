

/*---
description: >
    `yield` expressions bind weakly
features: [generators]
es6id: 14.4
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {
  *g() { yield 3 + yield 4; }
}
