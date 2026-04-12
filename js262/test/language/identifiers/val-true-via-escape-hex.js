

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: true
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var tr\u{75}e = 123;
