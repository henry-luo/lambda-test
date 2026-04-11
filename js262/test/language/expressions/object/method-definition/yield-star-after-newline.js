

/*---
description: >
    A newline may not precede the `*` token in a `yield` expression.
features: [generators]
es6id: 14.4
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var obj = {
  *g() {
    yield
    * 1
  }
};
