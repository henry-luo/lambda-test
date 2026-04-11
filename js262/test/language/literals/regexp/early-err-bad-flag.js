

/*---
esid: sec-primary-expression-regular-expression-literals-static-semantics-early-errors
info: |
  PrimaryExpression : RegularExpressionLiteral

description: >
  It is a Syntax Error if FlagText of RegularExpressionLiteral contains any code points other than "g", "i", "m", "u", or "y", ...

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/./G;
