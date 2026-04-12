

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a syntax error if AsyncFunctionBody contains SuperCall is true
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async(foo) => { super() };
