

/*---
description: Class declaration not allowed in statement position
esid: sec-if-statement
es6id: 13.6
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

if (false) ; else class C {}
