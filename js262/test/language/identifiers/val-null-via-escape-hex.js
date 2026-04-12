

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: null
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{6e}ull = 123;
