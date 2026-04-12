

/*---
es5id: 7.8.3-6-s
description: Strict Mode - octal extension (000) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

000;
