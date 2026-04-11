

/*---
description: >
    identifier "let" allowed as lefthandside expression
esid: sec-iteration-statements
info: |
  for ( [ lookahead ∉ { let [ } ] LeftHandSideExpression [?Yield, ?Await] in 
    Expression[+In, ?Yield, ? Await]) Statement[?Yield, ?Await, ?Return]
flags: [noStrict]
---*/
for (let in {}) { }
