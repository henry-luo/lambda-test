

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

const a = 1;

export { a, a };
$DONOTEVALUATE();
