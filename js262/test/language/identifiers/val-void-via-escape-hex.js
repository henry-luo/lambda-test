

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: void
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{76}\u{6f}\u{69}\u{64} = 123;
