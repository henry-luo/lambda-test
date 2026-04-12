

/*---
es5id: 7.6-19
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: switch (switch)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var switc\u0068 = 123;
