

/*---
description: Class declaration not allowed in statement position
esid: sec-for-in-and-for-of-statements
es6id: 13.7.5
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

for (var x in {}) class C {}
