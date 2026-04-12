

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Async function expressions are not a simple assignment target.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

(async function foo() { } = 1)
