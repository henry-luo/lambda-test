

/*---
description: Function declaration not allowed in statement position
esid: sec-do-while-statement
es6id: 13.7.2
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

do function f() {} while (false)
