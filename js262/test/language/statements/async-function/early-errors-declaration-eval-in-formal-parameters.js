

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: It is a SyntaxError if FormalParameters contains eval in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

async function foo (eval) {  }
