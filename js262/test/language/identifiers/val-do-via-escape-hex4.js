

/*---
es5id: 7.6-8
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: do (do)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0064\u006f = 123;
