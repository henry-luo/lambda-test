

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: instanceof
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var insta\u{6e}ceof = 123;
