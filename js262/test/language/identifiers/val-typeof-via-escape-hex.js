

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: typeof
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var typeo\u{66} = 123;
