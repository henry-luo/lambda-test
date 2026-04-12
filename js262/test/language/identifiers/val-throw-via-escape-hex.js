

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: throw
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var thro\u{77} = 123;
