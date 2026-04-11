

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a syntax error if FormalParameters contains SuperCall is true
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async function foo (foo = super()) { let bar; }
