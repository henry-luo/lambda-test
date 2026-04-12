

/*---
esid: sec-if-statement
description: >
  ExpressionStatement doesn't have a lookahead restriction for `let <binding-identifier>`.
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
flags: [noStrict]
---*/

if (false) let 
x = 1;
