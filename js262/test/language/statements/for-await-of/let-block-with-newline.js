

/*---
esid: sec-for-in-and-for-of-statements
description: >
  ExpressionStatement doesn't have a lookahead restriction for `let {`.
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
flags: [noStrict]
features: [async-iteration]
---*/

async function* f() {
  for await (var x of []) let 
  {}
}
