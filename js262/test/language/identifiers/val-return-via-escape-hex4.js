

/*---
es5id: 7.6-15
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: return (return)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var retur\u006e = 123;
