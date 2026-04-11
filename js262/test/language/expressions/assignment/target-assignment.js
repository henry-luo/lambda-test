

/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to assignment
info: |
  AssignmentExpression : LeftHandSideExpression = AssignmentExpression

  - It is an early Syntax Error if LeftHandSideExpression is neither an
    ObjectLiteral nor an ArrayLiteral and AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

var a, b = 2;
(a = b) = 1;
