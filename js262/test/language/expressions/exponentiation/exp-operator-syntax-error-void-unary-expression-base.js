

/*---
author: Rick Waldron
esid: sec-unary-operators
description: Exponentiation Expression syntax error, `void` UnaryExpression
info: |
  ExponentiationExpression :
    UnaryExpression
    ...

  UnaryExpression :
    ...
    `void` UnaryExpression
    ...
features: [exponentiation]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();
void 1 ** 2;
