

/*---
es5id: 7.8.3-7-s
description: Strict Mode - octal extension (005) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

005;
