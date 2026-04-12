

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: import
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{69}\u{6d}\u{70}\u{6f}\u{72}\u{74} = 123;
