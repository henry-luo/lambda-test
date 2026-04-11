

/*---
es5id: 7.6-36
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: import (import)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0069\u006d\u0070\u006f\u0072\u0074 = 123;
