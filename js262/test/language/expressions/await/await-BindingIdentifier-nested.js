

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
esid: pending
description: >
  Await is not allowed as an identifier in functions nested in async functions
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

async function foo() {
  function await() {
  }
}
