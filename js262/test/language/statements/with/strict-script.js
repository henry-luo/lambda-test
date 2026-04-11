

/*---
es5id: 12.10.1-11-s
description: >
  Strict Mode - SyntaxError is thrown when using WithStatement in strict mode
  code
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

with ({}) {}
