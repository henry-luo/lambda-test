

/*---
es5id: 7.6-34
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: const (const)
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var co\u006est = 123;
