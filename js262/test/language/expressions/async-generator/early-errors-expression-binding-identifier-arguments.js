

/*---
author: Caitlin Potter <caitp@igalia.com>
esid: sec-identifiers-static-semantics-early-errors
description: >
  If the source code matching this production is strict code, it is a
  Syntax Error if BindingIdentifier is the IdentifierName arguments.
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
features: [async-iteration]
---*/

$DONOTEVALUATE();

(async function* arguments() { });
