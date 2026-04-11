

/*---
es5id: 7.6-26
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: default (default)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var def\u0061ult = 123;
