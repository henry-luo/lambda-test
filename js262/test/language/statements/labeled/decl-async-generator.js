

/*---
esid: sec-labelled-statements
description: >
  AsyncGeneratorDeclaration is not allowed in statement position
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
negative:
  phase: parse
  type: SyntaxError
features: [async-iteration]
---*/

$DONOTEVALUATE();

label: async function* g() {}
