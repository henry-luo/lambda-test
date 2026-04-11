

/*---
esid: sec-for-statement
description: "'for(var arguments in ...) {...}' throws SyntaxError in strict mode"
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var arguments in null) {}
