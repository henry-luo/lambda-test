

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if FormalParameters' default expressions contains await
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
async function foo (x = await) {  }
