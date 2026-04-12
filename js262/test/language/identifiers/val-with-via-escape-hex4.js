

/*---
es5id: 7.6-25
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: with (with)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0077ith = 123;
