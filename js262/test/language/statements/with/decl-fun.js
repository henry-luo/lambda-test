

/*---
description: Function declaration not allowed in statement position
esid: sec-with-statement
es6id: 13.11
flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

with ({}) function f() {}
