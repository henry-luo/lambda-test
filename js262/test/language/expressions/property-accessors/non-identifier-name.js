

/*---
esid: sec-left-hand-side-expressions
info: |
  Token following DOT must be a valid identifier-name, test with string literal.
description: >
  12.3 Left-Hand-Side Expressions
    MemberExpression[Yield, Await]:
      MemberExpression[?Yield, ?Await] . IdentifierName

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

unresolvableReference."";
