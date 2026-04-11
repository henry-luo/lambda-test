

/*---
es5id: 7.6-3
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: false (false)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var fals\u0065 = 123;
