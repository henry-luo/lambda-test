

/*---
esid: sec-assignment-operators-static-semantics-early-errors
info: |
    It is an early Syntax Error if LeftHandSideExpression is neither an
    ObjectLiteral nor an ArrayLiteral and AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.
description: Assignment with non-simple target
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

1 = 1;
