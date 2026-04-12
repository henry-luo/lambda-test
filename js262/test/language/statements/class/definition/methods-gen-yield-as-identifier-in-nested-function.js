

/*---
description: >
    `yield` is a reserved keyword within normal function bodies declared
    within classes.
features: [generators]
es6id: 12.1.1
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {
  *g() {
    function h() {
      yield = 1;
    }
  }
}
