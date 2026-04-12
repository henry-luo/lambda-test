

/*---
description: |
  async/await containing escapes
esid: pending
negative:
  phase: parse
  type: SyntaxError
flags:
  - module
---*/

$DONOTEVALUATE();

export default \u0061sync function f() {}
