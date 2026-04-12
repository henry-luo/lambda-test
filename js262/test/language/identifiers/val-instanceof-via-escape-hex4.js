

/*---
es5id: 7.6-6
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: instanceof (instanceof)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var insta\u006eceof = 123;
