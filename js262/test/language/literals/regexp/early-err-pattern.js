

/*---
esid: sec-primary-expression-regular-expression-literals-static-semantics-early-errors
info: |
  PrimaryExpression : RegularExpressionLiteral

description: >
    It is a Syntax Error if BodyText of RegularExpressionLiteral cannot be recognized using the goal symbol Pattern of the ECMAScript RegExp grammar specified in #sec-patterns.
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

/?/;
