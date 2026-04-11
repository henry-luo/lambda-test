

/*---
es5id: 7.6-33
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: super (super)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0073uper = 123;
