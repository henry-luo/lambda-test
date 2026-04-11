

/*---
flags:
  - module
negative:
  phase: parse
  type: SyntaxError
description: |
  pending
esid: pending
---*/

async () => class { x = await };
$DONOTEVALUATE();
