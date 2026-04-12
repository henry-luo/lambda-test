

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: case
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{63}ase = 123;
