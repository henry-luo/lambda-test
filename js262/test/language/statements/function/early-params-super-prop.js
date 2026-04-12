

/*---
esid: sec-function-definitions-static-semantics-early-errors
es6id: 14.1.2
description: Parameters may not contain a "super" property reference
info: |
  It is a Syntax Error if FunctionBody Contains SuperProperty is true.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function f(x = super.x) {}
