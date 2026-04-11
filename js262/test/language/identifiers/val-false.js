

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var false = 123;
