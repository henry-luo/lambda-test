

/*---
es5id: 12.10.1-1-s
description: with statement in strict mode throws SyntaxError (strict function)
flags: [noStrict]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f() {
  'use strict';
  var o = {};
  with (o) {};
}
