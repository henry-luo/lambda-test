

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: prod-LeftHandSideExpression
description: >
  Async generator function expressions are not a simple assignment target.
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*() { } = 1);
