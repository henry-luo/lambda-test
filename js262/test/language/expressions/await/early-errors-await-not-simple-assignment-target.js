

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  await is not a simple assignment target and cannot be assigned to.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async function foo() {
  (await 1) = 1;
}
