

/*---
es5id: 12.10.1-11gs
description: Strict Mode - SyntaxError is thrown when using with statement
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

with ({}) { }
