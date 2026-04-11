

/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to a "covered" YieldExpression
info: |
  AssignmentExpression : LeftHandSideExpression = AssignmentExpression

  - It is an early Syntax Error if LeftHandSideExpression is neither an
    ObjectLiteral nor an ArrayLiteral and AssignmentTargetType of
    LeftHandSideExpression is invalid or strict.

  12.15.3 Static Semantics: IsValidSimpleAssignmentTarget

  AssignmentExpression:
    YieldExpression
    ArrowFunction
    AsyncArrowFunction
    LeftHandSideExpression = AssignmentExpression
    LeftHandSideExpression AssignmentOperator AssignmentExpression

  1. Return invalid.
features: [generators]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

function* g() {
  (yield) = 1;
}
