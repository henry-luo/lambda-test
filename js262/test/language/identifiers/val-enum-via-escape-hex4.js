

/*---
es5id: 7.6-32
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: enum (enum)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0065\u006e\u0075\u006d = 123;
