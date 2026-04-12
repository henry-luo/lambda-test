

/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in initializers with const are prohibited
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (const a = 0 in {});

