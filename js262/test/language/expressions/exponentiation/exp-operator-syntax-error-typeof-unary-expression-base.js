

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `typeof` UnaryExpression
info: |
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `typeof` UnaryExpression
    ...
features: [exponentiation]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
typeof 1 ** 2;
