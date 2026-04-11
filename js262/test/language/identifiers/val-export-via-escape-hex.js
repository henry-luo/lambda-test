

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: export
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var expor\u{74} = 123;
