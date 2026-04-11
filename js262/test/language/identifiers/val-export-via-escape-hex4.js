

/*---
es5id: 7.6-35
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: export (export)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var expor\u0074 = 123;
