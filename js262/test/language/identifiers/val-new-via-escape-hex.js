

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: new
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var n\u{65}w = 123;
