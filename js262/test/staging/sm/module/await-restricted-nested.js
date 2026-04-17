

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


function f() {
    await;
}
$DONOTEVALUATE();
