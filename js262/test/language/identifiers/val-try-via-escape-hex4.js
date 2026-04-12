

/*---
es5id: 7.6-12
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: try (try)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0074\u0072\u0079 = 123;
