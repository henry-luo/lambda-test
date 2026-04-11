

/*---
esid: sec-for-statement
description: "'for(var eval = 42 in ...) {...}' throws SyntaxError in strict mode"
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var eval = 42 in null) {}
