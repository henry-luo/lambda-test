

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: return
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var retur\u{6e} = 123;
