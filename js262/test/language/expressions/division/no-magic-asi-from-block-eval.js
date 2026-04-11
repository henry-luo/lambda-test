

/*---
esid: sec-multiplicative-operators-runtime-semantics-evaluation
description: division after block statement (no ASI)
info: |
  MultiplicativeExpression[Yield, Await]:
    ExponentiationExpression
    MultiplicativeExpression MultiplicativeOperator ExponentiationExpression

  MultiplicativeOperator : one of
    * / %
---*/

var of = 4;
var g = 2;

var notRegExp = eval('{[42]}.8/of/g');

assert.sameValue(notRegExp, .1);
