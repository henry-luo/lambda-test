

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: enum
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{65}\u{6e}\u{75}\u{6d} = 123;
