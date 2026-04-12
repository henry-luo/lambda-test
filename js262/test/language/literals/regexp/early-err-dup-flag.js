

/*---
esid: sec-primary-expression-regular-expression-literals-static-semantics-early-errors
info: |
  PrimaryExpression : RegularExpressionLiteral

description: >
  It is a Syntax Error if FlagText of RegularExpressionLiteral contains ... the same code point more than once.

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/./gig;
