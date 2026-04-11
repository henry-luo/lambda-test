

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: try
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u{74}\u{72}\u{79} = 123;
