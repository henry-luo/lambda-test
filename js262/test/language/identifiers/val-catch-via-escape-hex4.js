

/*---
es5id: 7.6-13
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: catch (catch)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0063atch = 123;
