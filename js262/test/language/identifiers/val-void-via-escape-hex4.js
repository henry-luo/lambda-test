

/*---
es5id: 7.6-16
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: void (void)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0076\u006f\u0069\u0064 = 123;
