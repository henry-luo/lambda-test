

/*---
es5id: 7.6-2
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: true (true)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var tr\u0075e = 123;
