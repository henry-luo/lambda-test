

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: extends
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var extend\u{73} = 123;
