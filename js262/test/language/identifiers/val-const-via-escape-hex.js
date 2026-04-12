

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: const
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var co\u{6e}st = 123;
