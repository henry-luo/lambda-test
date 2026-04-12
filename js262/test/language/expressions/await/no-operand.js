

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  await requries an operand.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async function foo() {
  await;
}
