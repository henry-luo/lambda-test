

/*---
es5id: 7.6-23
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: this (this)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var thi\u0073 = 123;
