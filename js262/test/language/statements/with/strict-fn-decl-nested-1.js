

/*---
es5id: 12.10.1-2-s
description: >
  with statement in strict mode throws SyntaxError (nested function where
  container is strict)
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function foo() {
  'use strict';
  function f() {
    var o = {};
    with (o) {};
  }
}
