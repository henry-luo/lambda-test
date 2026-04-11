

/*---
es5id: 7.8.3-2gs
description: >
    Strict Mode - octal extension is forbidden in strict mode (after a
    hex number is assigned to a variable)
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var a;
a = 0x1;
a = 01;
