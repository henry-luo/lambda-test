

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-async-generator-function-definitions-static-semantics-early-errors
description: >
  It is a Syntax Error if FormalParameters Contains YieldExpression is true.
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*(x = yield) { });
