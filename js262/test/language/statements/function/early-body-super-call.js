

/*---
esid: sec-function-definitions-static-semantics-early-errors
es6id: 14.1.2
description: Body may not contain a "super" call
info: |
  It is a Syntax Error if FunctionBody Contains SuperCall is true.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f() {
  super();
}
