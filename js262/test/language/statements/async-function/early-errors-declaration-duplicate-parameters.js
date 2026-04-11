

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  If strict mode, early error rules for StrictFormalParameters are applied
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

async function foo(a, a) { }
