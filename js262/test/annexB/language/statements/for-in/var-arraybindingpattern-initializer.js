

/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in initializers with ArrayBindingPatterns are always prohibited
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var [a] = 0 in {});
