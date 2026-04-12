

/*---
description: >
    `yield` may not be used as the binding identifier of a function
    expression within classes.
features: [generators]
es6id: 14.1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {
  *g() {
    (function yield() {});
  }
}
