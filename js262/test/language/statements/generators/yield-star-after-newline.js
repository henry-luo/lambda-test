

/*---
description: >
    A newline may not precede the `*` token in a `yield` expression.
es6id: 14.4
negative:
  phase: parse
  type: SyntaxError
features: [generators]
---*/

$DONOTEVALUATE();

function* g() {
  yield
  * 1
}
