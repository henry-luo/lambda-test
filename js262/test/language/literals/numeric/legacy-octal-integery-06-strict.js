

/*---
es5id: 7.8.3-4-s
description: Strict Mode - octal extension (06) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

06;
