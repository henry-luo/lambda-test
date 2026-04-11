

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: this
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var thi\u{73} = 123;
