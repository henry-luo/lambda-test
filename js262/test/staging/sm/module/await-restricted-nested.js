

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


function f() {
    await;
}
$DONOTEVALUATE();
