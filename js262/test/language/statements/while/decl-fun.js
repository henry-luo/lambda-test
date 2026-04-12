

/*---
description: Function declaration not allowed in statement position
esid: sec-while-statement
es6id: 13.7.3
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

while (false) function f() {}
