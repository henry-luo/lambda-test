

/*---
esid: sec-for-in-and-for-of-statements
description: >
  The left-hand-side of a for-of loop may be the identifier `async` written
  with an escape sequence.
info: |
  ForInOfStatement[Yield, Await, Return] :
    for ( [lookahead ∉ { let, async of }] LeftHandSideExpression[?Yield, ?Await] of AssignmentExpression[+In, ?Yield, ?Await] ) Statement[?Yield, ?Await, ?Return]
---*/

let async;

for (\u0061sync of [7]);

assert.sameValue(async, 7);
