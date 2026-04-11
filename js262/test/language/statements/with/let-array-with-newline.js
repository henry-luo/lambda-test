

/*---
esid: sec-with-statement
description: >
  ExpressionStatement has a lookahead restriction for `let [`.
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
negative:
  phase: parse
  type: SyntaxError
flags: [noStrict]
---*/

$DONOTEVALUATE();


if (false) {
    with ({}) let
    [a] = 0;
}
