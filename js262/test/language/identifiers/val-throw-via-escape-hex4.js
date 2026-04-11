

/*---
es5id: 7.6-27
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: throw (throw)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var thro\u0077 = 123;
