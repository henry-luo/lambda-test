

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-identifiers-static-semantics-early-errors
description: >
  `await` is not a valid BindingIdentifier for AsyncGeneratorExpressions.
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function* await() { });
