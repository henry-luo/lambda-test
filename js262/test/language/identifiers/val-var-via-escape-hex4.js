

/*---
es5id: 7.6-11
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: var (var)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var va\u0072 = 123;
