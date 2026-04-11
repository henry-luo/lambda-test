

/*---
es5id: 7.6-7
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: typeof (typeof)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var typeo\u0066 = 123;
