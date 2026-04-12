

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: default
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var def\u{61}ult = 123;
