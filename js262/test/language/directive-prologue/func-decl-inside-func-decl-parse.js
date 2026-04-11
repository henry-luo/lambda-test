

/*---
esid: use-strict-directive
es5id: 10.1.1-15-s
description: >
    Strict Mode - Function code that is part of a FunctionDeclaration
    is strict function code if FunctionDeclaration is contained in use
    strict
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();

function testcase() {
  "use strict";
  function fun() {
    var static;
  }
}
