

/*---
es5id: 12.10.1-3-s
description: >
  with statement in strict mode throws SyntaxError (nested strict function)
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function foo() {
  function f() {
    'use strict';
    var o = {};
    with (o) {};
  }
}
