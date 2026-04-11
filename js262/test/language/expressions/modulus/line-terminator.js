

/*---
esid: sec-multiplicative-operators-runtime-semantics-evaluation
description: Line terminator between the operands of a modulus operator
info: |
  MultiplicativeExpression[Yield, Await]:
    ExponentiationExpression
    MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

  MultiplicativeOperator : one of
    * / %
---*/

var x = 18

%

7

%

3
;

assert.sameValue(x, 1);
