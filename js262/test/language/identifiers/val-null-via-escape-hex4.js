

/*---
es5id: 7.6-1
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: null (null)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u006eull = 123;
