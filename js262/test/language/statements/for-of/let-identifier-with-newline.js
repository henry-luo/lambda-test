

/*---
esid: sec-for-in-and-for-of-statements
description: >
  ExpressionStatement doesn't have a lookahead restriction for `let <binding-identifier>`.
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
flags: [noStrict]
---*/

for (var x of []) let 
x = 1;
