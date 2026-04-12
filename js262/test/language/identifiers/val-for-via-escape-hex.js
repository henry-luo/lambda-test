

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: for
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var f\u{6f}r = 123;
