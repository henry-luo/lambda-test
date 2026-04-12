

/*---
esid: sec-for-statement
description: "'for(var eval in ...) {...}' throws SyntaxError in strict mode"
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var eval in null) {}
