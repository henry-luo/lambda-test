

/*---
es5id: 7.6-29
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: delete (delete)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var \u0064elete = 123;
