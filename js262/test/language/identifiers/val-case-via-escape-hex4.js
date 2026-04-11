

/*---
es5id: 7.6-5
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: case (case)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0063ase = 123;
