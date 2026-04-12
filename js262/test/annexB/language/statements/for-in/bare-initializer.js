

/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in heads prohibit AssignmentExpressions
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
var a;

for (a = 0 in {});
