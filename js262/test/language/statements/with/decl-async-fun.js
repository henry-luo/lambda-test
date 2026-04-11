

/*---
esid: sec-with-statement
description: >
  AsyncFunctionDeclaration is not allowed in statement position
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
negative:
  phase: parse
  type: SyntaxError
features: [async-functions]
flags: [noStrict]
---*/

$DONOTEVALUATE();

with ({}) async function f() {}
