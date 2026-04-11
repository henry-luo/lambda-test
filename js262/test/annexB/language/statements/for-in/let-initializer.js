

/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in initializers with let are prohibited
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (let a = 0 in {});

