

/*---
includes: [sm/non262.js, sm/non262-shell.js]
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
