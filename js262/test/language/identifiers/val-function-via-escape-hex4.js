

/*---
es5id: 7.6-22
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: function (function)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var func\u0074ion = 123;
