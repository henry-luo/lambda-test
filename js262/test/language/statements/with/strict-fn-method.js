

/*---
es5id: 12.10.1-14-s
description: >
  Strict Mode - SyntaxError is thrown when the getter of a literal object
  utilizes WithStatement
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var obj = { get(a) { with(a){} } };
