

/*---
esid: sec-for-statement
description: >
    'for(var arguments = 42 in ...) {...}' throws SyntaxError in
    strict mode within a function declaration
flags: [onlyStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f() {
  for (var arguments = 42 in null) {}
}
