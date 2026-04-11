

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-generator-function-definitions
description: >
  A newline may not precede the `*` token in a `yield` expression.
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*() {
  yield
  * 1;
});
