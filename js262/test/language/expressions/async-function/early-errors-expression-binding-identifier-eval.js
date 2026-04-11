

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  If the source code matching this production is strict code, it is a Syntax Error if BindingIdentifier is the IdentifierName eval.
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();
(async function eval () { })
