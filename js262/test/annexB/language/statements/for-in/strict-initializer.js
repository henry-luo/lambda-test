

/*---
esid: sec-initializers-in-forin-statement-heads
description: >
    for-in initializers in strict mode are prohibited
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

for (var a = 0 in {});
