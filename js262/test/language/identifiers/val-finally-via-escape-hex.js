

/*---
es6id: 11.6
description: >
    SyntaxError expected: reserved words used as Identifier
    Names in UTF8: finally
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var fina\u{6c}ly = 123;
