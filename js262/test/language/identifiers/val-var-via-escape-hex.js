

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: var
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var va\u{72} = 123;
