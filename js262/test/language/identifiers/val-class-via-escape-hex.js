

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: class
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var cla\u{73}s = 123;
