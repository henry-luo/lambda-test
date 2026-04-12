

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: continue
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{63}ontinue = 123;
