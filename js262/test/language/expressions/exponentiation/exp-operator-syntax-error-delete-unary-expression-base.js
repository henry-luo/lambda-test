

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `delete` UnaryExpression
info: |
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `delete` UnaryExpression
    ...
features: [exponentiation]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
delete o.p ** 2;
