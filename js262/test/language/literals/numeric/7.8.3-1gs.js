

/*---
es5id: 7.8.3-1gs
description: Strict Mode - octal extension(010) is forbidden in strict mode
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var y = 010;
