

/*---
es5id: 12.10.1-7-s
description: >
  with statement in strict mode throws SyntaxError (function expression)
negative:
  phase: parse
  type: SyntaxError
flags: [onlyStrict]
---*/

$DONOTEVALUATE();

var f = function () {
   var o = {};
   with (o) {};
};
