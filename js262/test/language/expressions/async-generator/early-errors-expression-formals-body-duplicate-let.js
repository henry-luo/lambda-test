

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-async-generator-function-definitions-static-semantics-early-errors
description: >
  It is a SyntaxError if BoundNames of FormalParameters also occurs in the
  LexicallyDeclaredNames of AsyncFunctionBody
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function*(a) { let a; });
