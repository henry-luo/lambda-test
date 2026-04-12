

/*---
esid: sec-multiplicative-operators-runtime-semantics-evaluation
description: No ASI happening in identifier used as operands
info: |
  MultiplicativeExpression[Yield, Await]:
    ExponentiationExpression
    MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

  MultiplicativeOperator : one of
    * / %
---*/

var instance = 60;
var of = 6;
var g = 2;

var notRegExp = instance/of/g;

assert.sameValue(notRegExp, 5);
